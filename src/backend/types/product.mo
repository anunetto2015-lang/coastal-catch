import Storage "mo:caffeineai-object-storage/Storage";
import Common "common";

module {
  public type Category = {
    #fresh_fish;
    #dry_fish;
    #chutney;
    #masala;
  };

  public type WeightOption = {
    weight : Text;   // e.g. "500g", "1kg"
    price : Nat;     // price in paise (smallest currency unit)
  };

  public type Product = {
    id : Common.ProductId;
    name : Text;
    description : Text;
    category : Category;
    basePrice : Nat;             // fallback price in paise
    images : [Storage.ExternalBlob];
    stockQuantity : Nat;
    weightOptions : [WeightOption];
    featured : Bool;
    createdAt : Common.Timestamp;
  };

  // Shared-safe version for API boundaries (no mutable types)
  public type ProductInput = {
    name : Text;
    description : Text;
    category : Category;
    basePrice : Nat;
    stockQuantity : Nat;
    weightOptions : [WeightOption];
    featured : Bool;
  };
};
