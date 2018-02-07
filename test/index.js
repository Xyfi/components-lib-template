import func from "../src/";

describe( "func", () => {
	it( "returns test", () => {
		expect( func() ).toEqual( "test" );
	} );

	it( "doesn't return not-test", () => {
		expect( func() ).not.toEqual( "not-test" );
	} );
} );
