import Map "mo:core/Map";
import List "mo:core/List";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Storage "mo:caffeineai-object-storage/Storage";
import Types "../types/product";
import Common "../types/common";

module {
  public type State = {
    products : Map.Map<Common.ProductId, Types.Product>;
    var nextProductId : Common.ProductId;
    var initialized : Bool;
  };

  public func initState() : State {
    {
      products = Map.empty<Common.ProductId, Types.Product>();
      var nextProductId = 1;
      var initialized = false;
    }
  };

  public func listProducts(state : State) : [Types.Product] {
    state.products.values().toArray()
  };

  public func listByCategory(state : State, category : Types.Category) : [Types.Product] {
    state.products.values().filter(func(p) { p.category == category }).toArray()
  };

  public func listFeatured(state : State) : [Types.Product] {
    state.products.values().filter(func(p) { p.featured }).toArray()
  };

  public func getProduct(state : State, id : Common.ProductId) : ?Types.Product {
    state.products.get(id)
  };

  public func addProduct(state : State, input : Types.ProductInput) : Types.Product {
    let id = state.nextProductId;
    state.nextProductId += 1;
    let product : Types.Product = {
      id;
      name = input.name;
      description = input.description;
      category = input.category;
      basePrice = input.basePrice;
      images = [];
      stockQuantity = input.stockQuantity;
      weightOptions = input.weightOptions;
      featured = input.featured;
      createdAt = Time.now();
    };
    state.products.add(id, product);
    product
  };

  public func updateProduct(state : State, id : Common.ProductId, input : Types.ProductInput) : ?Types.Product {
    switch (state.products.get(id)) {
      case null null;
      case (?existing) {
        let updated : Types.Product = {
          existing with
          name = input.name;
          description = input.description;
          category = input.category;
          basePrice = input.basePrice;
          stockQuantity = input.stockQuantity;
          weightOptions = input.weightOptions;
          featured = input.featured;
        };
        state.products.add(id, updated);
        ?updated
      };
    }
  };

  public func deleteProduct(state : State, id : Common.ProductId) : Bool {
    switch (state.products.get(id)) {
      case null false;
      case (?_) {
        state.products.remove(id);
        true
      };
    }
  };

  public func updateStock(state : State, id : Common.ProductId, quantity : Nat) : Bool {
    switch (state.products.get(id)) {
      case null false;
      case (?existing) {
        let updated : Types.Product = { existing with stockQuantity = quantity };
        state.products.add(id, updated);
        true
      };
    }
  };

  public func addProductImage(state : State, id : Common.ProductId, image : Storage.ExternalBlob) : Bool {
    switch (state.products.get(id)) {
      case null false;
      case (?existing) {
        let imgList = List.fromArray(existing.images);
        imgList.add(image);
        let updated : Types.Product = { existing with images = imgList.toArray() };
        state.products.add(id, updated);
        true
      };
    }
  };

  public func seedSampleData(state : State) {
    if (state.initialized) return;
    state.initialized := true;

    // ── Fresh Fish ───────────────────────────────────────────────────────
    ignore addProduct(state, {
      name = "Rohu Fish";
      description = "Farm-fresh Rohu, cleaned and cut into thick steaks. Rich in Omega-3 and protein, perfect for curries and frying.";
      category = #fresh_fish;
      basePrice = 32000; // ₹320/kg in paise
      stockQuantity = 50;
      weightOptions = [
        { weight = "500g"; price = 16000 },
        { weight = "1kg"; price = 32000 },
        { weight = "2kg"; price = 62000 },
      ];
      featured = true;
    });

    ignore addProduct(state, {
      name = "Hilsa Fish (Ilish)";
      description = "Premium Hilsa — the king of fish. Delicately flavoured, expertly cleaned and ready to cook. A Bengali household staple.";
      category = #fresh_fish;
      basePrice = 80000; // ₹800/kg
      stockQuantity = 20;
      weightOptions = [
        { weight = "500g"; price = 40000 },
        { weight = "1kg"; price = 80000 },
      ];
      featured = true;
    });

    ignore addProduct(state, {
      name = "Pomfret (Silver)";
      description = "Whole silver pomfret, cleaned and descaled. Its mild, sweet flesh is ideal for shallow frying and steaming.";
      category = #fresh_fish;
      basePrice = 75000;
      stockQuantity = 30;
      weightOptions = [
        { weight = "250g"; price = 18750 },
        { weight = "500g"; price = 37500 },
        { weight = "1kg"; price = 75000 },
      ];
      featured = false;
    });

    ignore addProduct(state, {
      name = "Surmai (King Fish)";
      description = "Fresh King Fish steaks with firm, juicy flesh. Marinate and grill or prepare in a rich coconut curry.";
      category = #fresh_fish;
      basePrice = 55000;
      stockQuantity = 25;
      weightOptions = [
        { weight = "500g"; price = 27500 },
        { weight = "1kg"; price = 55000 },
        { weight = "2kg"; price = 105000 },
      ];
      featured = true;
    });

    ignore addProduct(state, {
      name = "Tiger Prawns";
      description = "Large, succulent tiger prawns — de-shelled and de-veined. Ready to toss in the pan for a quick and delicious meal.";
      category = #fresh_fish;
      basePrice = 90000;
      stockQuantity = 40;
      weightOptions = [
        { weight = "250g"; price = 22500 },
        { weight = "500g"; price = 45000 },
        { weight = "1kg"; price = 90000 },
      ];
      featured = true;
    });

    // ── Dry Fish ─────────────────────────────────────────────────────────
    ignore addProduct(state, {
      name = "Bombay Duck (Dried)";
      description = "Classic sun-dried Bombay Duck with an intense, smoky flavour. Crumble into dal or fry crispy as a side.";
      category = #dry_fish;
      basePrice = 25000;
      stockQuantity = 60;
      weightOptions = [
        { weight = "100g"; price = 5000 },
        { weight = "250g"; price = 12500 },
        { weight = "500g"; price = 25000 },
      ];
      featured = false;
    });

    ignore addProduct(state, {
      name = "Dry Prawns (Shrimp)";
      description = "Hand-picked small prawns, sun-dried to preserve natural sweetness. A versatile ingredient in chutneys, curries and rice dishes.";
      category = #dry_fish;
      basePrice = 45000;
      stockQuantity = 45;
      weightOptions = [
        { weight = "100g"; price = 9000 },
        { weight = "250g"; price = 22500 },
        { weight = "500g"; price = 45000 },
      ];
      featured = false;
    });

    ignore addProduct(state, {
      name = "Dried Mackerel (Bangda)";
      description = "Salted and sun-dried mackerel with a bold, savoury depth. Excellent in traditional coastal stir-fries and rice accompaniments.";
      category = #dry_fish;
      basePrice = 30000;
      stockQuantity = 35;
      weightOptions = [
        { weight = "250g"; price = 15000 },
        { weight = "500g"; price = 30000 },
      ];
      featured = false;
    });

    // ── Chutneys ─────────────────────────────────────────────────────────
    ignore addProduct(state, {
      name = "Green Chutney";
      description = "Zesty green chutney made from fresh coriander, mint, green chillies and lime. The perfect dip for fried fish and fritters.";
      category = #chutney;
      basePrice = 8000;
      stockQuantity = 100;
      weightOptions = [
        { weight = "200g"; price = 8000 },
        { weight = "400g"; price = 15000 },
      ];
      featured = false;
    });

    ignore addProduct(state, {
      name = "Coconut Chutney";
      description = "Creamy South-Indian style coconut chutney, tempered with mustard seeds and curry leaves. Pairs beautifully with fried seafood.";
      category = #chutney;
      basePrice = 9000;
      stockQuantity = 80;
      weightOptions = [
        { weight = "200g"; price = 9000 },
        { weight = "400g"; price = 17000 },
      ];
      featured = false;
    });

    // ── Masalas ──────────────────────────────────────────────────────────
    ignore addProduct(state, {
      name = "Fish Masala Blend";
      description = "Aromatic blend of 12 spices crafted specifically for fish curries. Adds a deep, layered flavour to any seafood dish.";
      category = #masala;
      basePrice = 12000;
      stockQuantity = 120;
      weightOptions = [
        { weight = "100g"; price = 6000 },
        { weight = "200g"; price = 12000 },
        { weight = "500g"; price = 28000 },
      ];
      featured = true;
    });

    ignore addProduct(state, {
      name = "Prawn Masala";
      description = "A piquant spice mix tailored for prawn preparations — tikka, curry or sauté. Ready to use straight from the pack.";
      category = #masala;
      basePrice = 12000;
      stockQuantity = 90;
      weightOptions = [
        { weight = "100g"; price = 6000 },
        { weight = "200g"; price = 12000 },
      ];
      featured = false;
    });
  };

};
