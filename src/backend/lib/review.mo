import Map "mo:core/Map";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Types "../types/review";
import Common "../types/common";

module {
  public type State = {
    reviews : Map.Map<Common.ReviewId, Types.Review>;
    var nextReviewId : Common.ReviewId;
  };

  public func initState() : State {
    {
      reviews = Map.empty<Common.ReviewId, Types.Review>();
      var nextReviewId = 1;
    }
  };

  public func addReview(state : State, input : Types.ReviewInput) : Types.Review {
    let id = state.nextReviewId;
    state.nextReviewId += 1;
    let review : Types.Review = {
      id;
      productId = input.productId;
      reviewerName = input.reviewerName;
      rating = input.rating;
      comment = input.comment;
      createdAt = Time.now();
    };
    state.reviews.add(id, review);
    review
  };

  public func getReviewsForProduct(state : State, productId : Common.ProductId) : [Types.Review] {
    state.reviews.values().filter(func(r) { r.productId == productId }).toArray()
  };

  public func listReviews(state : State) : [Types.Review] {
    state.reviews.values().toArray()
  };
};
