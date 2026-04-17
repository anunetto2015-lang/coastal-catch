import MixinObjectStorage "mo:caffeineai-object-storage/Mixin";
import Stripe "mo:caffeineai-stripe/stripe";
import OutCall "mo:caffeineai-http-outcalls/outcall";
import Runtime "mo:core/Runtime";

import ProductLib "lib/product";
import OrderLib "lib/order";
import ReviewLib "lib/review";

import MixinProductApi "mixins/product-api";
import MixinOrderApi "mixins/order-api";
import MixinReviewApi "mixins/review-api";

actor {
  // ── Object storage infrastructure ────────────────────────────────────
  include MixinObjectStorage();

  // ── Admin key (set once at deploy time via canister args or first call) ─
  var adminKey : Text = "changeme";

  // ── Domain state ─────────────────────────────────────────────────────
  let productState = ProductLib.initState();
  let orderState = OrderLib.initState();
  let reviewState = ReviewLib.initState();

  // Seed sample products on first init
  ProductLib.seedSampleData(productState);

  // ── Domain mixins ─────────────────────────────────────────────────────
  include MixinProductApi(productState, adminKey);
  include MixinOrderApi(orderState, adminKey);
  include MixinReviewApi(reviewState);

  // ── Stripe integration ────────────────────────────────────────────────
  var stripeConfig : ?Stripe.StripeConfiguration = null;

  public query func isStripeConfigured() : async Bool {
    stripeConfig != null
  };

  public shared func setStripeConfiguration(key : Text, config : Stripe.StripeConfiguration) : async () {
    if (key != adminKey) Runtime.trap("Unauthorized: invalid admin key");
    stripeConfig := ?config;
  };

  public shared ({ caller }) func createCheckoutSession(items : [Stripe.ShoppingItem], successUrl : Text, cancelUrl : Text) : async Text {
    let config = switch (stripeConfig) {
      case null Runtime.trap("Stripe is not configured");
      case (?c) c;
    };
    await Stripe.createCheckoutSession(config, caller, items, successUrl, cancelUrl, transform)
  };

  public func getStripeSessionStatus(sessionId : Text) : async Stripe.StripeSessionStatus {
    let config = switch (stripeConfig) {
      case null Runtime.trap("Stripe is not configured");
      case (?c) c;
    };
    await Stripe.getSessionStatus(config, sessionId, transform)
  };

  public query func transform(input : OutCall.TransformationInput) : async OutCall.TransformationOutput {
    OutCall.transform(input)
  };

  // ── Admin key management ──────────────────────────────────────────────
  public shared func setAdminKey(currentKey : Text, newKey : Text) : async Bool {
    if (currentKey != adminKey) return false;
    adminKey := newKey;
    true
  };
};
