
/* 1. MAHSULOTLAR (Products) */

// Kuryer xizmatiga tegishli mahsulotlar
class CourierDelivery {
  deliver() {
    return "Buyurtma kuryer orqali yetkazilmoqda";
  }
}

class CourierTracking {
  track() {
    return "Buyurtma kuryer orqali kuzatilmoqda";
  }
}

// Pochta xizmatiga tegishli mahsulotlar
class PostDelivery {
  deliver() {
    return "Buyurtma pochta orqali yuborildi";
  }
}

class PostTracking {
  track() {
    return "Buyurtma pochta orqali kuzatilmoqda";
  }
}


/* 2. ABSTRACT FACTORY */

class DeliveryFactory {
  createDelivery() {
    throw new Error("createDelivery() amalga oshirilishi kerak");
  }

  createTracking() {
    throw new Error("createTracking() amalga oshirilishi kerak");
  }
}


/* 3. CONCRETE FACTORIES */

class CourierFactory extends DeliveryFactory {
  createDelivery() {
    return new CourierDelivery();
  }

  createTracking() {
    return new CourierTracking();
  }
}

class PostFactory extends DeliveryFactory {
  createDelivery() {
    return new PostDelivery();
  }

  createTracking() {
    return new PostTracking();
  }
}


/* 4. CLIENT */

class OnlineStore {
  constructor(factory) {
    this.factory = factory;
  }

  order() {
    const delivery = this.factory.createDelivery();
    const tracking = this.factory.createTracking();

    console.log(delivery.deliver());
    console.log(tracking.track());
  }
}


/* 5. ISHLATISH */

const store1 = new OnlineStore(new CourierFactory());
store1.order();

console.log("----------");

const store2 = new OnlineStore(new PostFactory());
store2.order();
