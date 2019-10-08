describe("sample", function() {
    var sample = System.getModule("com.vmware.pscoe.test.testproject1").sample;
    it("should add two numbers", function() {
        expect(sample(5, 2)).toBe(7);
    });
});
