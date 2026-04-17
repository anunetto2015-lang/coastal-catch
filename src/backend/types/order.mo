import Common "common";

module {
  public type OrderStatus = {
    #pending;
    #paid;
    #cancelled;
  };

  public type CustomerDetails = {
    name : Text;
    email : Text;
    phone : Text;
    address : Text;
  };

  public type OrderItem = {
    productId : Common.ProductId;
    productName : Text;
    quantity : Nat;
    unitPrice : Nat;   // price in paise at time of order
    weight : ?Text;    // selected weight option, if any
  };

  public type Order = {
    id : Common.OrderId;
    customer : CustomerDetails;
    items : [OrderItem];
    totalAmount : Nat;
    status : OrderStatus;
    stripePaymentIntentId : ?Text;
    createdAt : Common.Timestamp;
  };

  public type CreateOrderInput = {
    customer : CustomerDetails;
    items : [OrderItem];
    totalAmount : Nat;
  };
};
