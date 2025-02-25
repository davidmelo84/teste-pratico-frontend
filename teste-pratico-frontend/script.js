"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Função para buscar os funcionários da API
function fetchEmployees() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("http://localhost:3000/employees");
        return response.json();
    });
}
// Função para formatar a data
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR");
}
// Função para formatar telefone
function formatPhone(phone) {
    return phone.replace(/(\d{3})(\d{3})(\d{4})(\d{4})/, "+$1 ($2) $3-$4");
}
// Função para renderizar a tabela
function renderTable(employees) {
    const tableBody = document.querySelector("#employee-table tbody");
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
function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    fetchEmployees().then(employees => {
        const filtered = employees.filter(emp => emp.name.toLowerCase().includes(searchTerm) ||
            emp.job.toLowerCase().includes(searchTerm) ||
            emp.phone.includes(searchTerm));
        renderTable(filtered);
    });
}
// Inicializar a página
document.addEventListener("DOMContentLoaded", () => {
    var _a;
    fetchEmployees().then(renderTable);
    (_a = document.querySelector("#search")) === null || _a === void 0 ? void 0 : _a.addEventListener("input", handleSearch);
});
