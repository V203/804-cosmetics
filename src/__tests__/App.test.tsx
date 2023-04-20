import { describe, expect, test } from '@jest/globals';
import Services from '../Service';
let sum = (a: number, b: number) => a + b

describe(
  "Products testing", () => {
    test('adds 1 + 2 to equal 3', () => {
      expect(sum(1, 2)).toBe(3);
    });


    test("The grand total should equal to zero", () => {
      let services = Services();
      let result:GLfloat = 0.00

      services.sub("foot massage");
      services.sub("foot massage");
      services.sub("foot massage");
      
  
      expect(services.getGrandTotal()).toEqual(result.toFixed(2));
    })
    test.skip("expected to return the length of 15", () => {
      let services = Services();
      expect(services.getProducts().length).toBe(15)
    });

    test("Should equal 0 since the product hasnt been added to the cart", () => {
      let services = Services();

      let expected = services.getSelectedProduct("Face Mask");
      console.log(expected)
      expect(expected.grand_total()).toBe(0);
    })

    test.skip("Should add to two items to the cart and the cart equal to the length of two", () => {
      let services = Services();

      services.add("Face Mask");
      services.add("Lavender Soap");
      
      expect(services.getCart().length).toBe(2);
    })


    test("Should be able to get the grand total of all items in the cart", () => {
      let services = Services();
      let result:GLfloat = 1140.00

      services.add("foot massage");
      services.add("foot massage");
      services.add("charcoal clay");
      services.add("charcoal clay");
  
      expect(services.getGrandTotal()).toEqual(result.toFixed(2));
    })




  });