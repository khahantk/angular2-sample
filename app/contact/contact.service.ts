export class ContactService {
    data = ['data1', 'data2'];
    get(): string[] {
        return this.data;
}
    add(value: string): void {
        this.data.push(value);
    }
}