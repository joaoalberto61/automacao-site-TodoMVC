import { test, expect } from '@playwright/test';

test('adiciona uma tarefa', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  await page.getByPlaceholder('What needs to be done?').fill('Turma 4 Teste de Software');
  await page.getByPlaceholder('What needs to be done?').press('Enter');

  await expect(page.getByTestId('todo-title')).toHaveText('Turma 4 Teste de Software');
});