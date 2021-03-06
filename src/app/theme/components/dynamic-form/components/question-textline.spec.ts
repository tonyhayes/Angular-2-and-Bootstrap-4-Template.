import { TextlineQuestion } from './question-textline';

describe('TextlineQuestion', () => {
	
	//specs
		it('should be a controlType of textline', () => {
			const ddq = new TextlineQuestion();
			expect(ddq.controlType).toEqual('textline');
		});
		it('should return empty options array', () => {
			const ddq = new TextlineQuestion();
			expect(ddq.options).toEqual(undefined);
		});
		it('should be a formatted required TextlineQuestion', () => {
			const ddq = new TextlineQuestion({
				key: 'firstName',
				label: 'First name',
				value: 'tony',
				required: true,
				order: 1
			});
			expect(ddq.key).toEqual('firstName');
			expect(ddq.label).toEqual('First name');
			expect(ddq.value).toEqual('tony');
			expect(ddq.required).toEqual(true);
			expect(ddq.order).toEqual(1);
		});
		it('should be a formatted TextlineQuestion, with type', () => {
			const ddq = new TextlineQuestion({
				key: 'emailAddress',
				label: 'Email',
				type: 'email',
				order: 2
			})
			expect(ddq.key).toEqual('emailAddress');
			expect(ddq.label).toEqual('Email');
			expect(ddq.required).toEqual(false);
			expect(ddq.type).toEqual('email');
			expect(ddq.order).toEqual(2);
		});
}) 

