function soaringIQ(iq,nr_days)
{
	var step = 0.01;
	var starter_iq = iq;
	for(var i = 1; i <= nr_days; i++)
	{
		iq += step;
	}
	//round to 2 decimals
	var round_iq = Math.round(iq * 100) / 100
	console.log('Starter IQ: ' + starter_iq);
	console.log('IQ after ' + nr_days + ' days: ' + round_iq);
}

soaringIQ(112,98)