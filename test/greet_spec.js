var greet = require("../lib/");
var mygreet = greet('BranchZero', 1);
describe('greet', function(){
	it("should greet a preson by name", function(){
		expect(mygreet).to.contain('BranchZero');
	});
        it("should greet a person flirtatiously if drunk", function(){
                expect(mygreet).to.contain(', you look sexy today');
        });
});
