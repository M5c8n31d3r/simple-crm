export class User {
    [x: string]: any;
    firstName: string;
    lastName: string;
    email: any;
    birthDate: number;
    street: string;
    zipCode: number;
    city: string;
    color!: string;
    phone: number;


    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : ''; // its like a if/else 
        this.lastName = obj ? obj.lastName : '';
        this.email = obj ? obj.email : '';
        this.birthDate = obj ? obj.birthDate : '';
        this.street = obj ? obj.street : '';
        this.zipCode = obj ? obj.zipCode : '';
        this.city = obj ? obj.city : '';
        this.color = obj ? obj.color : '';
        this.phone = obj ? obj.phone : '';

    }


    public toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            birthDate: this.birthDate,
            email: this.email,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city,
            color: this.color,
            phone: this.phone,

        }
    }
}