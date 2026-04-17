import Runtime "mo:core/Runtime";
import Storage "mo:caffeineai-object-storage/Storage";
import ProductLib "../lib/product";
import ProductTypes "../types/product";
import Common "../types/common";

mixin (productState : ProductLib.State, adminKey : Text) {

  // ── Public read endpoints ────────────────────────────────────────────

  public query func listProducts() : async [ProductTypes.Product] {
    ProductLib.listProducts(productState)
  };

  public query func listProductsByCategory(category : ProductTypes.Category) : async [ProductTypes.Product] {
    ProductLib.listByCategory(productState, category)
  };

  public query func listFeaturedProducts() : async [ProductTypes.Product] {
    ProductLib.listFeatured(productState)
  };

  public query func getProduct(id : Common.ProductId) : async ?ProductTypes.Product {
    ProductLib.getProduct(productState, id)
  };

  // ── Admin write endpoints (admin-key protected) ──────────────────────

  public shared func addProduct(key : Text, input : ProductTypes.ProductInput) : async ProductTypes.Product {
    if (key != adminKey) Runtime.trap("Unauthorized: invalid admin key");
    ProductLib.addProduct(productState, input)
  };

  public shared func updateProduct(key : Text, id : Common.ProductId, input : ProductTypes.ProductInput) : async ?ProductTypes.Product {
    if (key != adminKey) Runtime.trap("Unauthorized: invalid admin key");
    ProductLib.updateProduct(productState, id, input)
  };

  public shared func deleteProduct(key : Text, id : Common.ProductId) : async Bool {
    if (key != adminKey) Runtime.trap("Unauthorized: invalid admin key");
    ProductLib.deleteProduct(productState, id)
  };

  public shared func updateStock(key : Text, id : Common.ProductId, quantity : Nat) : async Bool {
    if (key != adminKey) Runtime.trap("Unauthorized: invalid admin key");
    ProductLib.updateStock(productState, id, quantity)
  };

  public shared func addProductImage(key : Text, id : Common.ProductId, image : Storage.ExternalBlob) : async Bool {
    if (key != adminKey) Runtime.trap("Unauthorized: invalid admin key");
    ProductLib.addProductImage(productState, id, image)
  };
};
