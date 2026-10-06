import { test, expect } from '@playwright/test';
//Teste da pagina TodoMVC
test.beforeEach(async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
});

//Criando variaveis dos locators para reduzir a quantidade de codigo digitado

test('adiciona uma tarefa', async ({ page }) => {
  const novaTarefa = page.getByRole('textbox', { name: 'What needs to be done?' });
  const itens = page.getByTestId('todo-title');

  await novaTarefa.fill('Turma 4 Teste de Software');
  await novaTarefa.press('Enter');

  await expect(itens).toHaveText(['Turma 4 Teste de Software']);
  await expect(itens).toHaveCount(1);
  await expect(novaTarefa).toBeEmpty();
});

test('marca uma tarefa como concluída', async ({ page }) => {
  const novaTarefa = page.getByRole('textbox', { name: 'What needs to be done?' });

  await novaTarefa.fill('Turma 4 Teste de Software');
  await novaTarefa.press('Enter');

  const tarefa = page.getByTestId('todo-item').filter({ hasText: 'Turma 4 Teste de Software' });
  await tarefa.getByRole('checkbox').check();

  await expect(tarefa).toHaveClass(/completed/);
});