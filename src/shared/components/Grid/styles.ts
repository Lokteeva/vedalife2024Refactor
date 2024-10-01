import styled from 'styled-components';

import type { ColProps, RowProps } from './Grid.types';
import { Align, Direction, JustifyContent, Wrap } from './Grid.types';

export const Row = styled.div<RowProps>((props) => {
  const {
    justify = JustifyContent.start,
    align = Align.middle,
    gutter = 0,
    mb = 0,
    mt = 0,
    ml = 0,
    mr = 0,
    direction = Direction.row,
    gap = 0,
    wrap = Wrap.nowrap,
    width = 'auto',
  } = props;

  const justifyContentMap = {
    [JustifyContent.start]: 'flex-start',
    [JustifyContent.end]: 'flex-end',
    [JustifyContent.center]: 'center',
    [JustifyContent.around]: 'space-around',
    [JustifyContent.between]: 'space-between',
  };

  const alignMap = {
    [Align.top]: 'flex-start',
    [Align.middle]: 'center',
    [Align.bottom]: 'flex-end',
    [Align.baseline]: 'baseline',
  };

  const margin = Array.isArray(gutter) ? gutter.map((g) => g + 'px').join(' ') : gutter + 'px';

  return `
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justifyContentMap[justify]};
    align-items: ${alignMap[align]};
    margin-bottom: ${mb}px;
    margin-top: ${mt}px;
    margin-left: ${ml}px;
    margin-right: ${mr}px;
    gap: ${gap}px;
    width: ${width};

    flex-wrap: ${wrap};
    & > * {
      margin: ${margin};
    }

    & > *:first-of-type {
      margin-left: 0px;
    }

    & > *:last-child {
      margin-right: 0px;
    }
  `;
});

export const Col = styled.div<ColProps>((props) => {
  const width = props.span ? (100 * props.span) / 12 + '%' : 'auto';

  return `
    width: ${width};
    max-width: ${width};
    flex-basis: ${width};
  `;
});
