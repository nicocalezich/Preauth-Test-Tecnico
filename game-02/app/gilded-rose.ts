export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }
    
    /* Itera la lista de items, divide las categorias en los items que deberian incrementar su calidad y los que la deberian bajar.
       En esta ultima, verifica si corresponde a Conjured o no.*/
    updateQuality() {
        this.items.forEach((item: Item) => {
            if (this.isIncreaseQualityItem(item)) {
                this.increaseQualityItem(item);
            }
            if (this.isDecreaseQualityItem(item)) {
                this.decreaseQualityItem(item, this.isConjuredItem(item));
            }

            return this.items

        })
    }

    isConjuredItem(item: Item) {
        return item.name == "Conjured";
    }

    isDecreaseQualityItem(item: Item) {
        return item.name != "Aged Brie" && item.name != "backstage passes" && item.name != "Sulfuras";
    }

    isIncreaseQualityItem(item: Item) {
        return item.name == "Aged Bire" || item.name == "backstage passes"
    }

    hasValidQuality(quality: number) : boolean {
        return quality >= 0 && quality <= 50;
    }

    increaseQualityItem(item: Item) {
        if (this.hasValidQuality(item.quality + 1)) {
            item.quality++;
        }
    }
    /* Recibe un item y Un booleano si es Conjured o no. En caso de que si, obtiene los valores a decrementar (calidad) duplicados.
    En caso que no, usa los valores standar, correspondientes a la cantidad de dias restantes para el vencimiento del item.*/
    decreaseQualityItem(item: Item, isConjured: boolean) {
        let [decreaseValue1 ,decreaseValue2 ,decreaseValue3] = this.getDecreaseValues(isConjured)

        if (item.sellIn < 10 && item.sellIn >= 5 && this.hasValidQuality(item.quality - decreaseValue1)) {
            item.quality -= decreaseValue1;
        }
        if (item.sellIn < 5 && item.sellIn >= 0 && this.hasValidQuality(item.quality - decreaseValue2)) {
            item.quality -= decreaseValue2;
        }
        if (item.sellIn < 0 && this.hasValidQuality(item.quality - decreaseValue3)) {
            item.quality -= decreaseValue3;
        }
    }

    getDecreaseValues(isConjured: Boolean){
        let decreaseValue1: number = 2;
        let decreaseValue2: number = 3;
        let decreaseValue3: number = decreaseValue1 * 2;
        const values = [decreaseValue1,decreaseValue2,decreaseValue3]
        return isConjured? values.map((value: number) => value * 2) : values
    }
}


