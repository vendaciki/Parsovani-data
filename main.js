/*
Bez použití knihovny dayjs napište funkci parseDate, která na vstupu obdrží řetězec obsahující datum ve formátu DD.MM.YYYY a vrátí objekt s jednotlivýnu částmi zadaného data. Příklad použití:

> parseDate('12.03.2015')
{ day: 12, month: 3, year: 2015 }
> parseDate('06.04.2021')
{ day: 6, month: 4, year: 2021 }
*/



const parseDate = (datum) => {
	return {
		den: Number(datum.slice(0, 2)),
		mesic: Number(datum.slice(3, 5)),
		rok: Number(datum.slice(6)),
	}
}
