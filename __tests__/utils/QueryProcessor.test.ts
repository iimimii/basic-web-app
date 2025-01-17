import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return yuchingc description', () => {
        const query = "yuchingc";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "oh my gosh you found me, yuchingc"
          ));
    });

    test('should answer name', () => {
        const query = "what is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "mimi"
          ));
    });

    test('should add numbers', () => {
        expect(QueryProcessor("What is 5 plus 52?")).toEqual("57");
        expect(QueryProcessor("What is 12 plus 1?")).toEqual("13");
    });

    test('should multiply numbers', () => {
        expect(QueryProcessor("What is 89 multiplied by 3?")).toEqual("267");
        expect(QueryProcessor("What is 10 multiplied by 54?")).toEqual("540");
    });

    test('should subtract numbers', () => {
        expect(QueryProcessor("What is 78 minus 44?")).toEqual("34");
        expect(QueryProcessor("What is 3 minus 9?")).toEqual("-6");
    });

    test('should find the largest of the numbers', () => {
        expect(QueryProcessor("Which of the following numbers is the largest: 28, 22, 78?")).toEqual("78");
        expect(QueryProcessor("Which of the following numbers is the largest: 81, 58, 20?")).toEqual("81");
    });



});