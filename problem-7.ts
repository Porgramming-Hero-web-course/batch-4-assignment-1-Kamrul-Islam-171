{
    //

    class Car {
        name: string;
        model: string;
        year: number;

        constructor(name: string, model: string, year: number) {
            this.name = name;
            this.model = model;
            this.year = year;
        }

        getCarAge(): number {
            const currYear = new Date().getFullYear();
            return currYear - this.year;

        }
    }

    const car = new Car("Honda", "Civic", 2018);
    const res: number = car.getCarAge();
    console.log(res);


    //
}