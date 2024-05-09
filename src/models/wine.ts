class Wine {
    name: string
    description: string
    country: string
    grape: string
    year: number
    rating: number
    price: number

    constructor(name: string, description: string, country: string, grape: string, year: number, rating: number, price: number) {
        this.name = name;
        this.description = description;
        this.country = country;
        this.grape = grape;
        this.year = year;
        this.rating = rating;
        this.price = price;
    }
}