interface IVehicle {
    start() :void;
    stop() :void;
    honk() :string;
}

class Car implements IVehicle {
    private speed :number;

    public start() {
        this.speed = 10;
        console.log('start');
    }

    public stop() {
        this.speed = 0;
        console.log('stop');
    }

    public honk() {
        return "tin tin";``
    }
}