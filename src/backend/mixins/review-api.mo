import Runtime "mo:core/Runtime";
import ReviewLib "../lib/review";
import ReviewTypes "../types/review";
import Common "../types/common";

mixin (reviewState : ReviewLib.State) {

  public shared func addReview(input : ReviewTypes.ReviewInput) : async ReviewTypes.Review {
    ReviewLib.addReview(reviewState, input)
  };

  public query func getProductReviews(productId : Common.ProductId) : async [ReviewTypes.Review] {
    ReviewLib.getReviewsForProduct(reviewState, productId)
  };
};
