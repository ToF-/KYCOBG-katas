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
/* ACTION POINTS
*/
export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            // check if isnt cheese or backstage ticket
            if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                // check if qualty can be increased - max 50
                if (this.items[i].quality > 0) {
                    // if isnt legedary
                    if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                        // decrease quality by 1
                        this.items[i].quality = this.items[i].quality - 1
                    }
                }
            } else {
                // cheese and ticket else case
                // check if quality can be increased - max 50
                if (this.items[i].quality < 50) {
                    // increase quality by 1
                    this.items[i].quality = this.items[i].quality + 1
                    // if backstage ticket
                    if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
                        // if sellIn date < 11
                        if (this.items[i].sellIn < 11) {
                            // check if quality can be increased - max 50
                            if (this.items[i].quality < 50) {
                                // increase quality by 1
                                this.items[i].quality = this.items[i].quality + 1
                            }
                        }
                        // if sellIn date < 6
                        if (this.items[i].sellIn < 6) {
                            // check if quality can be increased - max 50
                            if (this.items[i].quality < 50) {
                                // increase quality by 1
                                this.items[i].quality = this.items[i].quality + 1
                            }
                        }
                    }
                }
            }
            // check if not a legendary item
            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                // reset sellIn date to 0
                this.items[i].sellIn = this.items[i].sellIn - 1;
            }
            // if item can be sell
            if (this.items[i].sellIn < 0) {
                // if its not cheese
                if (this.items[i].name != 'Aged Brie') {
                    // if no back stage ticket
                    if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                        // check if qquality can be decreased
                        if (this.items[i].quality > 0) {
                            // check if not a legendary item
                            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                                //decrease quality by 1
                                this.items[i].quality = this.items[i].quality - 1
                            }
                        }
                    } else {
                        //reset quality to 0 if sellin < 0
                        this.items[i].quality = this.items[i].quality - this.items[i].quality
                    }
                } else {
                    //cheese case
                    // chek if quality can be increased
                    if (this.items[i].quality < 50) {
                        // increase quality by 1
                        this.items[i].quality = this.items[i].quality + 1
                    }
                }
            }
        }

        return this.items;
    }
}
