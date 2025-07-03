export interface Sales{
    id?: number;
    customerName: string;
    contactNumber: string;
    address: string;
    mushroomType: string;
    quantity: number;
    pricePerKg: number;
    totalPrice: number;
    dateOfSale: Date;
}