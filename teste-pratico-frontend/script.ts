// Definição do tipo Employee
type Employee = {
    id: number;
    name: string;
    job: string;
    admission_date: string;
    phone: string;
    image: string;
};

// Função para buscar os funcionários da API
async function fetchEmployees(): Promise<Employee[]> {
    const response = await fetch("http://localhost:3000/employees");
    return response.json();
}

// Função para formatar a data
function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR");
}

// Função para formatar telefone
function formatPhone(phone: string): string {
    return phone.replace(/(\d{3})(\d{3})(\d{4})(\d{4})/, "+$1 ($2) $3-$4");
}

// Função para renderizar a tabela
function renderTable(employees: Employee[]) {
    const tableBody = document.querySelector("#employee-table tbody") as HTMLTableSectionElement;
    tableBody.innerHTML = "";

    employees.forEach(employee => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td><img src="${employee.image}" alt="${employee.name}" class="avatar"></td>
            <td>${employee.name}</td>
            <td>${employee.job}</td>
            <td>${formatDate(employee.admission_date)}</td>
            <td>${formatPhone(employee.phone)}</td>
        `;

        tableBody.appendChild(row);
    });
}

// Função para filtrar a pesquisa
function handleSearch(event: Event) {
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
    fetchEmployees().then(employees => {
        const filtered = employees.filter(emp =>
            emp.name.toLowerCase().includes(searchTerm) ||
            emp.job.toLowerCase().includes(searchTerm) ||
            emp.phone.includes(searchTerm)
        );
        renderTable(filtered);
    });
}

// Inicializar a página
document.addEventListener("DOMContentLoaded", () => {
    fetchEmployees().then(renderTable);
    document.querySelector("#search")?.addEventListener("input", handleSearch);
});
