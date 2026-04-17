import Runtime "mo:core/Runtime";
import OrderLib "../lib/order";
import OrderTypes "../types/order";
import Common "../types/common";

mixin (orderState : OrderLib.State, adminKey : Text) {

  // ── Public endpoints ─────────────────────────────────────────────────

  public shared func createOrder(input : OrderTypes.CreateOrderInput) : async OrderTypes.Order {
    OrderLib.createOrder(orderState, input)
  };

  public query func getOrder(id : Common.OrderId) : async ?OrderTypes.Order {
    OrderLib.getOrder(orderState, id)
  };

  // ── Admin endpoints ───────────────────────────────────────────────────

  public shared func listOrders(key : Text) : async [OrderTypes.Order] {
    if (key != adminKey) Runtime.trap("Unauthorized: invalid admin key");
    OrderLib.listOrders(orderState)
  };

  public shared func updateOrderStatus(key : Text, id : Common.OrderId, status : OrderTypes.OrderStatus) : async ?OrderTypes.Order {
    if (key != adminKey) Runtime.trap("Unauthorized: invalid admin key");
    OrderLib.updateOrderStatus(orderState, id, status)
  };

  public shared func setOrderPaymentIntent(key : Text, id : Common.OrderId, intentId : Text) : async ?OrderTypes.Order {
    if (key != adminKey) Runtime.trap("Unauthorized: invalid admin key");
    OrderLib.setPaymentIntent(orderState, id, intentId)
  };
};
