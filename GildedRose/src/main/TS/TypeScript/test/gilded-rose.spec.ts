import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('should create item foo', function() {
        // arrange
        const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
        // action
        const items = gildedRose.updateQuality();
        // asssert
        expect(items[0].name).to.equal('foo');
    });
    it('should decrease 1 in quality', function() {
        // arrange
        const gildedRose = new GildedRose([ new Item('foo', 2, 10) ]);
        // action
        const items = gildedRose.updateQuality();
        // asssert
        expect(items[0].quality).to.equal(9);
    });
    it('should decrease 1 in sellIn', function() {
        // arrange
        const gildedRose = new GildedRose([
            new Item('foo', 2, 10),
            new Item('pen', 0, 10)
        ]);
        // action
        const items = gildedRose.updateQuality();
        // asssert
        expect(items[0].sellIn).to.equal(1);
        expect(items[1].sellIn).to.equal(-1);
    });
    it('should decrease quality by 2 when sellIn is 0', function() {
        // arrange
        const gildedRose = new GildedRose([ new Item('foo', 0, 10) ]);
        // action
        const items = gildedRose.updateQuality();
        // asssert
        expect(items[0].quality).to.equal(8);
    });
    it('should never decrease quality to negative values', function() {
        // arrange
        const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
        // action
        const items = gildedRose.updateQuality();
        // asssert
        expect(items[0].quality).to.equal(0);
    });
});
