//The `FusionCharts.register()` API is used to register the new theme in the FusionCharts core.
FusionCharts.register('theme', {
  name: 'essent',
  theme: {
      base: {
        chart: {
          paletteColors: '#e60167, #FFBB33, #99CC00, #33B5E5, #AA66CC',
          baseFontColor: '#36474D',
          baseFont: 'Helvetica Neue,Arial',
          captionFontSize: '14',
          subcaptionFontSize: '14',
          subcaptionFontBold: '0',
          showBorder: '0',
          bgColor: '#ffffff',
          showShadow: '0',
          canvasBgColor: '#ffffff',
          canvasBorderAlpha: '0',
          useplotgradientcolor: '0',
          useRoundEdges: '0',
          showPlotBorder: '0',
          showAlternateHGridColor: '0',
          showAlternateVGridColor: '0',
          toolTipBorderThickness: '0',
          toolTipBgColor: '#99CC00',
          toolTipBgAlpha: '90',
          toolTipBorderRadius: '2',
          toolTipPadding: '5',
          legendBgAlpha: '0',
          legendBorderAlpha: '0',
          legendShadow: '0',
          legendItemFontSize: '10',
          drawCustomLegend: '0',
          divlineAlpha: '100',
          divlineColor: '#36474D',
          divlineThickness: '1',
          divLineIsDashed: '1',
          divLineDashLen: '1',
          divLineGapLen: '1',
          showHoverEffect: '1',
          valueFontSize: '11',
          showXAxisLine: '1',
          xAxisLineThickness: '1',
          xAxisLineColor: '#36474D'
        }
      },
      mscolumn2d: {
        chart: {
          valueFontColor: '#3B373A', //overwrite base value
          placeValuesInside: '0',
          rotateValues: '1'
        }
      }
  }
});
