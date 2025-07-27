import 'core-js/stable';
import 'regenerator-runtime/runtime';

describe('ESM Browser', () => {
  beforeEach(async () => {
    const out = await page.goto(`${PATH}/index.html`, { waitUntil: 'load' });

    page.on('console', consoleObj => {
      for (let i = 0; i < consoleObj.args().length; ++i)
        console.log(`${i}: ${consoleObj.args()[i]}`);
    });
  });

  test('test HTML title', async () => {
    await expect(page.title()).resolves.toMatch(
      'Test Kalender Jawa Browser ESM version'
    );
  });

  test("test sasi bulan jawa di div id 'sasi'", async () => {
    const taun = await page.$eval('#sasi', e => {
      return {
        innerHTML: e.innerHTML,
      };
    });
    expect(taun.innerHTML).toBe('sasi_1:mukarom');
  });

  test("test tahun jawa div id 'tahun'", async () => {
    const taun = await page.$eval('#tahun', e => {
      return {
        innerHTML: e.innerHTML,
      };
    });
    expect(taun.innerHTML).toBe('1954:alip_selasa_pon');
  });
});
