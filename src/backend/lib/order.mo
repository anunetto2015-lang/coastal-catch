import Map "mo:core/Map";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Types "../types/order";
import Common "../types/common";

module {
  public type State = {
    orders : Map.Map<Common.OrderId, Types.Order>;
    var nextOrderId : Common.OrderId;
  };

  public func initState() : State {
    {
      orders = Map.empty<Common.OrderId, Types.Order>();
      var nextOrderId = 1;
    }
  };

  public func createOrder(state : State, input : Types.CreateOrderInput) : Types.Order {
    let id = state.nextOrderId;
    state.nextOrderId += 1;
    let order : Types.Order = {
      id;
      customer = input.customer;
      items = input.items;
      totalAmount = input.totalAmount;
      status = #pending;
      stripePaymentIntentId = null;
      createdAt = Time.now();
    };
    state.orders.add(id, order);
    order
  };

  public func getOrder(state : State, id : Common.OrderId) : ?Types.Order {
    state.orders.get(id)
  };

  public func listOrders(state : State) : [Types.Order] {
    state.orders.values().toArray()
  };

  public func updateOrderStatus(state : State, id : Common.OrderId, status : Types.OrderStatus) : ?Types.Order {
    switch (state.orders.get(id)) {
      case null null;
      case (?existing) {
        let updated : Types.Order = { existing with status };
        state.orders.add(id, updated);
        ?updated
      };
    }
  };

  public func setPaymentIntent(state : State, id : Common.OrderId, intentId : Text) : ?Types.Order {
    switch (state.orders.get(id)) {
      case null null;
      case (?existing) {
        let updated : Types.Order = { existing with stripePaymentIntentId = ?intentId };
        state.orders.add(id, updated);
        ?updated
      };
    }
  };
};
