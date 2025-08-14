/**
 * @kalenderjawa/pustaka TypeScript API Examples
 * 
 * This file demonstrates type-safe usage of the library with TypeScript
 * Run with: npx tsx examples/api-examples.ts
 */

import {
  cariKurupTahunJawa,
  cariRumusAbadiAwalBulanTahunJawa,
  cariHariPasaranAwalBulanTahunJawa,
  sasi,
  versi,
  araningPasaran,
  araningDinten,
  araningSasi,
  tahunJawa,
} from '@kalenderjawa/pustaka';

// Import types for type-safe usage
import type {
  PasaranType,
  DintenType,
  WulanType,
  TaunType,
  KurupType,
  TaunKurupType,
  RumusSasiTaunType,
  SasiKeyType,
  WulanTaunType,
  WulanTaunQueryKeyType,
} from '@kalenderjawa/pustaka';

// ============================================================================
// Type-safe helper functions
// ============================================================================

/**
 * Type guard to check if RumusSasiTaunType is WulanTaunType
 */
function isWulanTaunType(
  result: RumusSasiTaunType | undefined
): result is WulanTaunType {
  return result !== undefined && 'rumus' in result;
}

/**
 * Type guard to check if RumusSasiTaunType is WulanTaunQueryKeyType
 */
function isWulanTaunQueryKeyType(
  result: RumusSasiTaunType | undefined
): result is WulanTaunQueryKeyType {
  return result !== undefined && 'query' in result && !('rumus' in result);
}

/**
 * Custom type for calendar entry
 */
interface CalendarEntry {
  date: number;
  dinten: string;
  pasaran: string;
  neptu: number;
}

/**
 * Custom type for month info
 */
interface MonthInfo {
  name: string;
  year: number;
  firstDay: {
    weekday: DintenType;
    pasaran: PasaranType;
  };
  length: number;
}

// ============================================================================
// 1. Type-safe Year Information
// ============================================================================
async function getYearInfo(year: number): Promise<TaunKurupType | null> {
  try {
    const result: TaunKurupType = await cariKurupTahunJawa(year);
    return result;
  } catch (error) {
    console.error(`Failed to get info for year ${year}:`, error);
    return null;
  }
}

async function exampleYearInfo(): Promise<void> {
  console.log('\n📅 Type-safe Year Information\n');

  const yearInfo: TaunKurupType | null = await getYearInfo(1957);
  
  if (yearInfo) {
    const taun: TaunType = yearInfo.taun;
    const kurup: KurupType = yearInfo.kurup;
    
    console.log(`Year ${1957}:`);
    console.log(`  Name: ${taun.taun}`);
    console.log(`  Length: ${taun.cacah} days`);
    console.log(`  Neptu: ${taun.neptu}`);
    console.log(`  Order in cycle: ${taun.urutan}/8`);
    console.log(`  Kurup: ${kurup.taun} ${kurup.dinten.dino} ${kurup.pasaran.pasaran}`);
  }

  // Process multiple years with proper typing
  const years: number[] = [1955, 1956, 1957, 1958];
  const yearInfos: (TaunKurupType | null)[] = await Promise.all(
    years.map(year => getYearInfo(year))
  );

  console.log('\nYear cycle:');
  yearInfos.forEach((info, index) => {
    if (info) {
      console.log(`  ${years[index]}: ${info.taun.taun} (${info.taun.cacah} days)`);
    }
  });
}

// ============================================================================
// 2. Type-safe Month Formula
// ============================================================================
async function getMonthFormula(
  month: string,
  year: number
): Promise<WulanTaunType | null> {
  try {
    const result: RumusSasiTaunType | undefined = 
      await cariRumusAbadiAwalBulanTahunJawa(month, year);
    
    if (isWulanTaunType(result)) {
      return result;
    }
    return null;
  } catch (error) {
    console.error(`Failed to get formula for ${month} ${year}:`, error);
    return null;
  }
}

async function exampleMonthFormula(): Promise<void> {
  console.log('\n📜 Type-safe Month Formula\n');

  const formula: WulanTaunType | null = await getMonthFormula('romadon', 1957);
  
  if (formula && formula.wulan) {
    const wulan: WulanType = formula.wulan;
    console.log(`Month: ${wulan.wulan}`);
    console.log(`  Order: ${wulan.urutan}/12`);
    console.log(`  Mnemonic: ${wulan.celukan}`);
    console.log(`  Days: ${wulan.cacah.join(' or ')}`);
    console.log(`  Formula offsets: dino=${formula.rumus.dino}, pasaran=${formula.rumus.pasaran}`);
  }

  // Check Dulkijah adjustment with proper typing
  console.log('\nDulkijah adjustment:');
  
  const yearsWith354Days: number[] = [1956, 1958]; // Je, Be
  const yearsWith355Days: number[] = [1957, 1959]; // Dal, Wawu
  
  for (const year of yearsWith354Days) {
    const dulkijah = await getMonthFormula('dulkijah', year);
    if (dulkijah?.wulan) {
      console.log(`  ${year} (354 days): Dulkijah = ${dulkijah.wulan.cacah} days`);
    }
  }
  
  for (const year of yearsWith355Days) {
    const dulkijah = await getMonthFormula('dulkijah', year);
    if (dulkijah?.wulan) {
      console.log(`  ${year} (355 days): Dulkijah = ${dulkijah.wulan.cacah} days`);
    }
  }
}

// ============================================================================
// 3. Type-safe First Day Calculation
// ============================================================================
async function getMonthFirstDay(
  month: string,
  year: number
): Promise<MonthInfo | null> {
  try {
    const result = await cariHariPasaranAwalBulanTahunJawa(month, year);
    const formula = await cariRumusAbadiAwalBulanTahunJawa(month, year);
    
    if (isWulanTaunType(formula) && formula.wulan) {
      const monthInfo: MonthInfo = {
        name: formula.wulan.wulan,
        year: year,
        firstDay: {
          weekday: result.kH,
          pasaran: result.kP,
        },
        length: formula.wulan.cacah[0],
      };
      return monthInfo;
    }
    return null;
  } catch (error) {
    console.error(`Failed to get first day for ${month} ${year}:`, error);
    return null;
  }
}

async function exampleFirstDay(): Promise<void> {
  console.log('\n🗓️ Type-safe First Day Calculation\n');

  const monthInfo: MonthInfo | null = await getMonthFirstDay('romadon', 1957);
  
  if (monthInfo) {
    console.log(`${monthInfo.name} ${monthInfo.year}:`);
    console.log(`  First day: ${monthInfo.firstDay.weekday.dino} ${monthInfo.firstDay.pasaran.pasaran}`);
    console.log(`  Weekday order: ${monthInfo.firstDay.weekday.urutan}`);
    console.log(`  Pasaran neptu: ${monthInfo.firstDay.pasaran.neptu}`);
    console.log(`  Month length: ${monthInfo.length} days`);
  }

  // Find all months starting with specific day-pasaran combo
  console.log('\nMonths starting with Jumat Kliwon in 1957:');
  
  const monthNames: string[] = araningSasi.map((m: WulanType) => m.wulan);
  const monthInfos: (MonthInfo | null)[] = await Promise.all(
    monthNames.map(month => getMonthFirstDay(month, 1957))
  );

  monthInfos.forEach((info) => {
    if (info && 
        info.firstDay.weekday.dino === 'Jumat' && 
        info.firstDay.pasaran.pasaran === 'Kliwon') {
      console.log(`  - ${info.name} ${info.year}`);
    }
  });
}

// ============================================================================
// 4. Type-safe Calendar Generation
// ============================================================================
async function getMonthCalendar(
  month: string,
  year: number
): Promise<CalendarEntry[]> {
  try {
    const result = await sasi(month, year);
    const calendar = result.s.get(result.k);
    
    if (!calendar) {
      return [];
    }

    return calendar.map((dayData): CalendarEntry => {
      const date = Number(Object.keys(dayData)[0]);
      const info = dayData[date];
      return {
        date,
        dinten: info.dinten,
        pasaran: info.pasaran,
        neptu: info.neptu,
      };
    });
  } catch (error) {
    console.error(`Failed to get calendar for ${month} ${year}:`, error);
    return [];
  }
}

async function exampleCalendar(): Promise<void> {
  console.log('\n📆 Type-safe Calendar Generation\n');

  const calendar: CalendarEntry[] = await getMonthCalendar('romadon', 1957);
  
  console.log('First week of Romadon 1957:');
  calendar.slice(0, 7).forEach((entry: CalendarEntry) => {
    console.log(`  ${entry.date}: ${entry.dinten} ${entry.pasaran} (neptu: ${entry.neptu})`);
  });

  // Find specific day-pasaran combinations
  const jumatKliwon: CalendarEntry[] = calendar.filter(
    (entry: CalendarEntry) => entry.dinten === 'Jumat' && entry.pasaran === 'Kliwon'
  );

  if (jumatKliwon.length > 0) {
    console.log('\nJumat Kliwon dates:');
    jumatKliwon.forEach((entry: CalendarEntry) => {
      console.log(`  - ${entry.date} Romadon 1957`);
    });
  }

  // Calculate neptu statistics with proper typing
  const neptuStats: Map<number, number> = new Map();
  calendar.forEach((entry: CalendarEntry) => {
    neptuStats.set(entry.neptu, (neptuStats.get(entry.neptu) || 0) + 1);
  });

  console.log('\nNeptu distribution:');
  Array.from(neptuStats.entries())
    .sort(([a], [b]) => a - b)
    .forEach(([neptu, count]) => {
      console.log(`  Neptu ${neptu}: ${count} days`);
    });
}

// ============================================================================
// 5. Working with Constants
// ============================================================================
function exampleConstants(): void {
  console.log('\n📚 Working with Constants\n');

  // Type-safe iteration over pasaran
  console.log('Pasaran cycle:');
  araningPasaran.forEach((p: PasaranType) => {
    console.log(`  ${p.urutan}. ${p.pasaran} (neptu: ${p.neptu})`);
  });

  // Type-safe iteration over weekdays
  console.log('\nWeekdays:');
  araningDinten.forEach((d: DintenType) => {
    console.log(`  ${d.urutan}. ${d.dino}`);
  });

  // Type-safe iteration over months
  console.log('\nMonths with varying lengths:');
  araningSasi.forEach((m: WulanType) => {
    const days: string = m.cacah.length > 1 
      ? `${m.cacah[0]} or ${m.cacah[1]}` 
      : `${m.cacah[0]}`;
    console.log(`  ${m.urutan}. ${m.wulan}: ${days} days`);
  });

  // Type-safe iteration over years
  console.log('\nYear cycle (Sewindu):');
  tahunJawa.forEach((t: TaunType) => {
    console.log(`  ${t.urutan}. ${t.taun}: ${t.cacah} days (neptu: ${t.neptu})`);
  });

  // Calculate cycle statistics
  const totalDays: number = tahunJawa.reduce(
    (sum: number, year: TaunType) => sum + year.cacah, 
    0
  );
  const avgDays: number = totalDays / tahunJawa.length;
  
  console.log(`\nCycle statistics:`);
  console.log(`  Total days in 8-year cycle: ${totalDays}`);
  console.log(`  Average days per year: ${avgDays}`);
}

// ============================================================================
// 6. Advanced Type-safe Patterns
// ============================================================================

/**
 * Create a year summary with all months
 */
interface YearSummary {
  year: number;
  yearName: string;
  yearLength: number;
  months: MonthInfo[];
}

async function createYearSummary(year: number): Promise<YearSummary | null> {
  const yearInfo = await getYearInfo(year);
  if (!yearInfo) return null;

  const monthInfos = await Promise.all(
    araningSasi.map(m => getMonthFirstDay(m.wulan, year))
  );

  const validMonths = monthInfos.filter((m): m is MonthInfo => m !== null);

  return {
    year,
    yearName: yearInfo.taun.taun,
    yearLength: yearInfo.taun.cacah,
    months: validMonths,
  };
}

/**
 * Find dates matching specific criteria
 */
interface DateCriteria {
  dinten?: string;
  pasaran?: string;
  neptu?: number;
}

async function findDatesMatching(
  month: string,
  year: number,
  criteria: DateCriteria
): Promise<CalendarEntry[]> {
  const calendar = await getMonthCalendar(month, year);
  
  return calendar.filter(entry => {
    if (criteria.dinten && entry.dinten !== criteria.dinten) return false;
    if (criteria.pasaran && entry.pasaran !== criteria.pasaran) return false;
    if (criteria.neptu !== undefined && entry.neptu !== criteria.neptu) return false;
    return true;
  });
}

async function exampleAdvancedPatterns(): Promise<void> {
  console.log('\n🔧 Advanced Type-safe Patterns\n');

  // Create year summary
  const summary: YearSummary | null = await createYearSummary(1957);
  
  if (summary) {
    console.log(`Year ${summary.year} (${summary.yearName}) Summary:`);
    console.log(`  Total days: ${summary.yearLength}`);
    console.log(`  Months: ${summary.months.length}`);
    
    const jumatKliwonMonths = summary.months.filter(
      m => m.firstDay.weekday.dino === 'Jumat' && 
           m.firstDay.pasaran.pasaran === 'Kliwon'
    );
    
    if (jumatKliwonMonths.length > 0) {
      console.log(`  Months starting with Jumat Kliwon:`);
      jumatKliwonMonths.forEach(m => {
        console.log(`    - ${m.name}`);
      });
    }
  }

  // Find specific dates
  console.log('\nFind specific date patterns in Romadon 1957:');
  
  const criteria: DateCriteria[] = [
    { dinten: 'Jumat', pasaran: 'Kliwon' },
    { neptu: 13 },
    { dinten: 'Senin', pasaran: 'Legi' },
  ];

  for (const crit of criteria) {
    const matches = await findDatesMatching('romadon', 1957, crit);
    const desc = Object.entries(crit)
      .map(([k, v]) => `${k}=${v}`)
      .join(', ');
    console.log(`  ${desc}: ${matches.length} matches`);
    if (matches.length > 0 && matches.length <= 3) {
      matches.forEach(m => {
        console.log(`    - Date ${m.date}: ${m.dinten} ${m.pasaran}`);
      });
    }
  }
}

// ============================================================================
// 7. Error Handling with Types
// ============================================================================
async function exampleErrorHandling(): Promise<void> {
  console.log('\n⚠️ Type-safe Error Handling\n');

  // Handle invalid year
  const invalidYear: TaunKurupType | null = await getYearInfo(9999);
  console.log(`Year 9999: ${invalidYear ? 'Found' : 'Not found (expected)'}`);

  // Handle invalid month
  const invalidMonth: MonthInfo | null = await getMonthFirstDay('invalid', 1957);
  console.log(`Invalid month: ${invalidMonth ? 'Found' : 'Not found (expected)'}`);

  // Safe batch processing with mixed results
  console.log('\nBatch processing with error handling:');
  
  interface BatchResult {
    year: number;
    success: boolean;
    data?: TaunKurupType;
    error?: string;
  }

  const testYears: number[] = [1956, 1957, 9999, 1958];
  const batchResults: BatchResult[] = await Promise.all(
    testYears.map(async (year): Promise<BatchResult> => {
      try {
        const data = await cariKurupTahunJawa(year);
        return { year, success: true, data };
      } catch (error) {
        return { 
          year, 
          success: false, 
          error: error instanceof Error ? error.message : 'Unknown error' 
        };
      }
    })
  );

  batchResults.forEach(result => {
    if (result.success && result.data) {
      console.log(`  ${result.year}: ✓ ${result.data.taun.taun}`);
    } else {
      console.log(`  ${result.year}: ✗ ${result.error}`);
    }
  });
}

// ============================================================================
// Main execution
// ============================================================================
async function main(): Promise<void> {
  console.log('🌙 Kalender Jawa TypeScript API Examples');
  console.log('Library version:', versi());
  console.log('='.repeat(60));

  try {
    await exampleYearInfo();
    await exampleMonthFormula();
    await exampleFirstDay();
    await exampleCalendar();
    exampleConstants();
    await exampleAdvancedPatterns();
    await exampleErrorHandling();

    console.log('\n' + '='.repeat(60));
    console.log('✅ All TypeScript examples completed successfully!');
    console.log('='.repeat(60));
  } catch (error) {
    console.error('\n❌ Error running examples:', error);
    process.exit(1);
  }
}

// Run all examples
main();
