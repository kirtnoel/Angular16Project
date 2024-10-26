import { Component } from "@angular/core";
import { Model } from "./repository.model";

@Component({
    selector: "app",
    templateUrl: "template.html"
})
export class ProductComponent {
    private model: Model = new Model();
    private messages = ["Total", "Price"];
    private index = 0;

    get count(): number {
        let result =  this.model.getProducts().length;
        console.log(`count value read: ${result}`);
        return result;
    }

    get total(): string {
        let result = this.model.getProducts()
            .reduce((total, p) => total + (p.price ?? 0), 0).toFixed(2);
        console.log(`total value read: ${result}`);
        return result;
    }

    get message(): string {
        let result = `${this.messages[this.index]} $${this.total}`;
        console.log(`message value read: ${result}`);
        return result;
    }

    toggleMessage() {
        console.clear();
        console.log("toggleMessage method invoked");
        this.index = (this.index + 1) % 2;
    }

    removeProduct() {
        console.clear();
        console.log("removeProduct method invoked");
        this.model.deleteProduct(this.model.getProducts()[0].id ?? 0);
    }
}
