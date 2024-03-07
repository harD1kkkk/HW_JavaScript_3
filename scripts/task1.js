class Marker {
    constructor(color, inkPercentage) {
        this.color = color;
        this.inkPercentage = inkPercentage;
    }

    print(text) {
        let inkRequired = text.replace(/\s/g, "").length * 0.5;
        if (inkRequired <= this.inkPercentage) {
            console.log(`Printing: ${text}`);
            this.inkPercentage -= inkRequired;
        } else {
            console.log("Not enough ink to print!");
        }
    }
}

class RefillableMarker extends Marker {
    refill(percentage) {
        this.inkPercentage += percentage;
        console.log(`Marker refilled. Current ink percentage: ${this.inkPercentage}`);
    }
}

let marker = new Marker("blue", 50);
marker.print("Hello, world!"); 
marker.print("This is a long text"); 

let refillableMarker = new RefillableMarker("black", 20);
refillableMarker.refill(50);
refillableMarker.print("Printing with refilled marker."); 
