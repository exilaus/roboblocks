/* global describe, it, expect */
(function() {
	'use strict';

	var root = this;

	root.define([], function() {

		describe('In Roboblocks.Blocks.procedures_defreturn block', function () {

			it('generates expected default Arduino code', function () {
				expect( true ).to.equal( true );
				var bool = Blockly.Block.obtain(Blockly.mainWorkspace, 'procedures_defreturn');

				assert.equal(Blockly.Arduino.workspaceToCode(), 'void function () {\n    }\n\nvoid setup()\n{\n\n}\n\n\nvoid loop()\n{\n\n}');
			});
		});
	});

}).call( this );
