class Department {
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    this.id = id;
    this.name = name;
  }

  addEmployedd(employee: string) {
    // this.id = "e"; => readonly error
  }
}
