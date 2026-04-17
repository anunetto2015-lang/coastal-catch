import Common "common";

module {
  public type Review = {
    id : Common.ReviewId;
    productId : Common.ProductId;
    reviewerName : Text;
    rating : Nat;      // 1–5
    comment : Text;
    createdAt : Common.Timestamp;
  };

  public type ReviewInput = {
    productId : Common.ProductId;
    reviewerName : Text;
    rating : Nat;
    comment : Text;
  };
};
