export = NewModule;

module NewModule {
	export function add(x: number, y: number): number {
		return x + y;
	}

	export class User {
		FirstName: string;
		LastName: string;

		constructor(fName: string, lName: string) {
		    this.FirstName = fName;
		    this.LastName = lName;
		}

		getFullName(): string {
			return this.FirstName + " " + this.LastName;
		}
	}
}