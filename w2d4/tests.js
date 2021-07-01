describe("filter", function () {
    it("an String method that takes an array of string arguments, and returns the filtered string without thoses string inputs",
        function () {
            assert.equal("This house is not nice!".filter('not'), "This house is nice!");
        });
});

describe("bubbleSort", function () {
    it("an Array method, returns the array sorted using bubble sort algo",
        function () {
            assert.equal([6,4,0, 3,-2,1].bubbleSort().toString(),  [-2, 0, 1, 3, 4, 6].toString());
        });
});

describe("teach", function () {
    it("a Teacher method take a subject string, returns the teacher name along with he's subject name",
        function () {
            let teacher = new Teacher();
            teacher.initialize("John", 29);
            assert.equal(teacher.teach("Inheritance"),  `${teacher.name} is now teaching Inheritance`);
        });
});