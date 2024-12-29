'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from 'recharts';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { CategoricalChartProps } from 'recharts/types/chart/generateCategoricalChart';
export default function Chart({
  chartConfig,
  chartData,
  title,
}: {
  chartData: CategoricalChartProps['data'];
  chartConfig: ChartConfig;
  title: string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='font-normal'>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer className='md:max-h-72' config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout='vertical'
            margin={{
              right: 16,
            }}
            barSize={40}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey='answer'
              type='category'
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis
              dataKey='number'
              type='number'
              hide
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator='line' />}
            />
            <Bar
              dataKey='number'
              layout='vertical'
              fill='hsl(var(--chart-3))'
              radius={4}
            >
              <LabelList
                dataKey='answer'
                position='insideLeft'
                offset={8}
                className='fill-gray-200'
                fontSize={12}
              />
              <LabelList
                dataKey='number'
                position='right'
                offset={8}
                className='fill-foreground'
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
