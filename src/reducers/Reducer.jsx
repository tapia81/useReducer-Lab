export const Reducer = (state, action) => {
	switch (action.type) {
		//for whatever value action.type do below
		case 'ADD':
			let currentValue = state;
			return (currentValue += action.payload);
		case 'SUBTRACT':
			let currentValue2 = state;
			return (currentValue2 -= action.payload);
		default:
			return state;
	}
};
