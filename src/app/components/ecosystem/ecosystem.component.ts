import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Chart, ChartType } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ChartDataLabels);

@Component({
  selector: 'app-ecosystem',
  templateUrl: './ecosystem.component.html',
  styleUrls: ['./ecosystem.component.css'],
  providers: [],
})
export class EcosystemComponent implements OnInit {
  mobile: boolean = false;
  tablet: boolean = false;
  desktop: boolean = false;
  largedesktop: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.initScrollAnimations();
    if (window.innerWidth < 768) {
      // 768px portrait
      this.mobile = true;
    } else if (window.innerWidth < 992) {
      this.tablet = true;
    } else if (window.innerWidth < 1200) {
      this.desktop = true;
    } else {
      this.largedesktop = true;
    }
  }
  initScrollAnimations(): void {
    //DOCTOR PATIENT ANIMATION
    let patientAnimationTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.patientDoctor-div',
        start: 'top top',
        end: '+=200%',
        scrub: 2,
        pin: true,
      },
    });

    let doctorAnimationTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.patientDoctor-div',
        start: 'top top',
        end: '+=200%',
        scrub: 2,
        pin: true,
      },
    });

    let chartAnimationTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.ecosystem-chart-div',
        start: 'top top',
        end: '+=200%',
        scrub: 0.2,
        pin: true,
      },
    });

    patientAnimationTimeline.to('.patient-div', { duration: 1, x: '60%' });
    patientAnimationTimeline.to('.section-pad', { duration: 5 });

    doctorAnimationTimeline.to('.doctor-div', { duration: 1, x: '-60%' });
    doctorAnimationTimeline.to('.section-pad', { duration: 5 });

    chartAnimationTimeline.fromTo(
      '.chart-div-teleplan',
      { opacity: 0, x: '0%', y: '-150%' },
      { opacity: 1, x: '10%', y: '0', duration: 5 }
    );
    chartAnimationTimeline.fromTo(
      '.chart-div-eHealthViewer',
      { opacity: 0, x: '0%', y: '100%' },
      { opacity: 1, x: '5%', y: '0%', duration: 5 }
    );
    chartAnimationTimeline.fromTo(
      '.chart-div-pharmanet',
      { opacity: 0, x: '0%', y: '-150%' },
      { opacity: 1, x: '10%', y: '0', duration: 5 }
    );
    chartAnimationTimeline.fromTo(
      '.chart-div-hospital',
      { opacity: 0, x: '0%', y: '100%' },
      { opacity: 1, x: '5%', y: '0%', duration: 5 }
    );
    chartAnimationTimeline.to('.chart-section-pad', { duration: 50 });
    //END DOCTOR PATIENT ANIMATION
  }

  /*
   *
   * ICLINIC CIRCLE
   *
   */

  public doughnutChartDataMobile: any = {
    labels: [
      `AF`,
      `CR`,
      'CRw',
      `HCM`,
      `HF`,
      `HFO`,
      'LP',
      `SC`,
      `SCESS`,
      `WC`,
      `FR`,
      `PD`,
      `AS/COPD`,
    ],
    datasets: [
      {
        data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        backgroundColor: function (context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (chartArea !== undefined) {
            if (context.dataIndex === 0) {
              return getGradientAF(ctx, chartArea);
            }
            if (context.dataIndex === 1) {
              return getGradientCR(ctx, chartArea);
            }
            if (context.dataIndex === 2) {
              return getGradientCRw(ctx, chartArea);
            }
            if (context.dataIndex === 3) {
              return getGradientHCM(ctx, chartArea);
            }
            if (context.dataIndex === 4) {
              return getGradientHF(ctx, chartArea);
            }
            if (context.dataIndex === 5) {
              return getGradientHFO(ctx, chartArea);
            }
            if (context.dataIndex === 6) {
              return getGradientLipid(ctx, chartArea);
            }
            if (context.dataIndex === 7) {
              return getGradientSC(ctx, chartArea);
            }
            if (context.dataIndex === 8) {
              return getGradientSCESS(ctx, chartArea);
            }
            if (context.dataIndex === 9) {
              return getGradientWC(ctx, chartArea);
            }
            if (context.dataIndex === 10) {
              return getGradientFrailty(ctx, chartArea);
            }
            if (context.dataIndex === 11) {
              return getGradientPD(ctx, chartArea);
            }
            if (context.dataIndex === 12) {
              return getGradientAsthmaCOPD(ctx, chartArea);
            }
          }
          return '#121212';
        },
        borderWidth: function (chart) {
          let width = chart.chart.width;
          if (width < 500) {
            return 2;
          } else {
            return 4;
          }
        },
        borderColor: [
          'rgba(255,255,255,1)',
          'rgba(255,235,248,1)',
          'rgba(255,233,247,1)',
          'rgba(249,224,251,1)',
          'rgba(249,224,251,1)',
          'rgba(253,224,255,1)',
          'rgba(252,216,255,1)',
          'rgba(213,213,255,1)',
          'rgba(206,206,255,1)',
          'rgba(192,192,255,1)', //cardiology end
          'rgba(206, 255, 173, 1)',
          'rgba(201, 255, 251, 1)',
          'rgba(255, 218, 193, 1)',
        ],
        borderRadius: 0,
        spacing: 50,
      },
    ],
  };
  public doughnutChartDataTablet: any = {
    labels: [
      `AF`,
      `CR`,
      'CRw',
      `HCM`,
      `HF`,
      `HFO`,
      'LP',
      `SC`,
      `SCESS`,
      `WC`,
      `FR`,
      `PD`,
      `AS/COPD`,
    ],
    datasets: [
      {
        data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        backgroundColor: function (context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (chartArea !== undefined) {
            if (context.dataIndex === 0) {
              return getGradientAF(ctx, chartArea);
            }
            if (context.dataIndex === 1) {
              return getGradientCR(ctx, chartArea);
            }
            if (context.dataIndex === 2) {
              return getGradientCRw(ctx, chartArea);
            }
            if (context.dataIndex === 3) {
              return getGradientHCM(ctx, chartArea);
            }
            if (context.dataIndex === 4) {
              return getGradientHF(ctx, chartArea);
            }
            if (context.dataIndex === 5) {
              return getGradientHFO(ctx, chartArea);
            }
            if (context.dataIndex === 6) {
              return getGradientLipid(ctx, chartArea);
            }
            if (context.dataIndex === 7) {
              return getGradientSC(ctx, chartArea);
            }
            if (context.dataIndex === 8) {
              return getGradientSCESS(ctx, chartArea);
            }
            if (context.dataIndex === 9) {
              return getGradientWC(ctx, chartArea);
            }
            if (context.dataIndex === 10) {
              return getGradientFrailty(ctx, chartArea);
            }
            if (context.dataIndex === 11) {
              return getGradientPD(ctx, chartArea);
            }
            if (context.dataIndex === 12) {
              return getGradientAsthmaCOPD(ctx, chartArea);
            }
          }
          return '#121212';
        },
        borderWidth: function (chart) {
          let width = chart.chart.width;
          if (width < 500) {
            return 2;
          } else {
            return 4;
          }
        },
        borderColor: [
          'rgba(255,255,255,1)',
          'rgba(255,235,248,1)',
          'rgba(255,233,247,1)',
          'rgba(249,224,251,1)',
          'rgba(249,224,251,1)',
          'rgba(253,224,255,1)',
          'rgba(252,216,255,1)',
          'rgba(213,213,255,1)',
          'rgba(206,206,255,1)',
          'rgba(192,192,255,1)', //cardiology end
          'rgba(206, 255, 173, 1)',
          'rgba(201, 255, 251, 1)',
          'rgba(255, 218, 193, 1)',
        ],
        borderRadius: 0,
        spacing: 75,
      },
    ],
  };
  public doughnutChartData: any = {
    labels: [
      `AF`,
      `CR`,
      'CRw',
      `HCM`,
      `HF`,
      `HFO`,
      'LP',
      `SC`,
      `SCESS`,
      `WC`,
      `FR`,
      `PD`,
      `AS/COPD`,
    ],
    datasets: [
      {
        data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        backgroundColor: function (context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (chartArea !== undefined) {
            if (context.dataIndex === 0) {
              return getGradientAF(ctx, chartArea);
            }
            if (context.dataIndex === 1) {
              return getGradientCR(ctx, chartArea);
            }
            if (context.dataIndex === 2) {
              return getGradientCRw(ctx, chartArea);
            }
            if (context.dataIndex === 3) {
              return getGradientHCM(ctx, chartArea);
            }
            if (context.dataIndex === 4) {
              return getGradientHF(ctx, chartArea);
            }
            if (context.dataIndex === 5) {
              return getGradientHFO(ctx, chartArea);
            }
            if (context.dataIndex === 6) {
              return getGradientLipid(ctx, chartArea);
            }
            if (context.dataIndex === 7) {
              return getGradientSC(ctx, chartArea);
            }
            if (context.dataIndex === 8) {
              return getGradientSCESS(ctx, chartArea);
            }
            if (context.dataIndex === 9) {
              return getGradientWC(ctx, chartArea);
            }
            if (context.dataIndex === 10) {
              return getGradientFrailty(ctx, chartArea);
            }
            if (context.dataIndex === 11) {
              return getGradientPD(ctx, chartArea);
            }
            if (context.dataIndex === 12) {
              return getGradientAsthmaCOPD(ctx, chartArea);
            }
          }
          return '#121212';
        },
        borderWidth: function (chart) {
          let width = chart.chart.width;
          if (width < 500) {
            return 2;
          } else {
            return 4;
          }
        },
        borderColor: [
          'rgba(255,255,255,1)',
          'rgba(255,235,248,1)',
          'rgba(255,233,247,1)',
          'rgba(249,224,251,1)',
          'rgba(249,224,251,1)',
          'rgba(253,224,255,1)',
          'rgba(252,216,255,1)',
          'rgba(213,213,255,1)',
          'rgba(206,206,255,1)',
          'rgba(192,192,255,1)', //cardiology end
          'rgba(206, 255, 173, 1)',
          'rgba(201, 255, 251, 1)',
          'rgba(255, 218, 193, 1)',
        ],
        borderRadius: 0,
        spacing: 100,
      },
    ],
  };
  public doughnutChartData2: any = {
    labels: [
      `Cardiology`, //cardiology
      null,
      `Geriatrics`, //geriatrics
      null,
      `Neurology`, //neurology
      null,
      `Respirology`, //respirology
      null,
    ],
    datasets: [
      {
        weight: 1,
      },
      {
        data: [17, 1, 2, 1],
        rotation: -8,
        // borderColor: '#121212',
        borderWidth: [4, 4, 4, 4],
        // borderColor: 'rgba(255, 218, 193, 1)',
        backgroundColor: '#121212',
        borderAlign: 'inner',
        borderColor: function (context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (chartArea !== undefined) {
            if (context.dataIndex === 0) {
              return 'rgba(192,192,255,1)';
            }
            if (context.dataIndex === 1) {
              return 'rgba(206, 255, 173, 1)';
            }
            if (context.dataIndex === 2) {
              return 'rgba(201, 255, 251, 1)';
            }
            if (context.dataIndex === 3) {
              return 'rgba(255, 218, 193, 1)';
            }
          }
          return 'null';
        },
      },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';
  //2nd
  public doughnutChartType2: ChartType = 'doughnut';

  public chartOptions: any = {
    hover: { mode: null },
    layout: {
      padding: function (chart, context) {
        let width = chart.chart.width;
        if (width < 500) {
          return { left: 10, right: 10 };
        }
        return { left: 25, right: 25 };
      },
    },
    cutout: function (chart, context) {
      let width = chart.chart.width;
      // console.log(width);
      if (width < 576) {
        return width / 7;
      }
      if (width < 768) {
        return width / 7;
      }
      if (width < 992) {
        return width / 7;
      }
      if (width < 1200) {
        return width / 5;
      }
      return width / 5;
    },
    animation: {
      onProgress: function (chart) {
        let width = chart.chart.width,
          height = chart.chart.height,
          ctx = chart.chart.ctx;
        ctx.restore();
        let fontSize = (height / 550).toFixed(2);
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, chart.chart.width / 10, 0, 2 * Math.PI);

        //GRADIENT
        var grd = ctx.createLinearGradient(0, 0, width, height);
        grd.addColorStop(0.4, 'rgba(105,180,250,1)');
        grd.addColorStop(0.5, 'rgba(255,255,255,1)');
        grd.addColorStop(0.7, 'rgba(105,180,250,1)');

        ctx.fillStyle = grd;
        ctx.fill();
        ctx.font = fontSize + 'em sans-serif';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = 'black';
        let text = 'iClinic MD',
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
      onComplete: function (chart) {
        let width = chart.chart.width,
          height = chart.chart.height,
          ctx = chart.chart.ctx;

        ctx.restore();
        let fontSize = (height / 550).toFixed(2);
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, chart.chart.width / 10, 0, 2 * Math.PI);
        // ctx.arc(width / 2, height / 2, chart.chart.width / 5, 0, 3 * Math.PI);
        //GRADIENT
        var grd = ctx.createLinearGradient(0, 0, width, height);
        grd.addColorStop(0.4, 'rgba(105,180,250,1)');
        grd.addColorStop(0.5, 'rgba(255,255,255,1)');
        grd.addColorStop(0.7, 'rgba(105,180,250,1)');
        ctx.fillStyle = grd;
        ctx.fill();
        ctx.font = fontSize + 'em sans-serif';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = 'black';
        let text = 'iClinic MD',
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      datalabels: {
        font: function (context) {
          let width = context.chart.width;
          let size = Math.round(width / 50);
          return {
            size: size,
            weight: 'bold',
            family: "Roboto, 'Helvetica Neue', sans-serif",
          };
        },
        align: 'end',
        offset: function (context) {
          let width = context.chart.width;
          if (width < 300) {
            return 27.5;
          }
          if (width < 400) {
            return 35;
          } else if (width < 500) {
            return 40;
          }
          return 50;
        },
        color: 'black',
        formatter: (value, context) => {
          if (value !== 0) {
            return context.chart.data.labels![context.dataIndex];
          } else {
            return null;
          }
        },
      },
    },
    responsive: true,
    maintainAspectRatio: true,
  };

  //2nd chart options
  public chartOptions2: any = {
    hover: { mode: null },
    cutout: function (chart, context) {
      let width = chart.chart.width;
      let height = chart.chart.height;
      return width / 8;
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
        display: false,
      },

      datalabels: {
        font: function (context) {
          var width = context.chart.width;
          var size = Math.round(width / 60);
          return {
            size: size,
            weight: 'bold',
            family: "Roboto, 'Helvetica Neue', sans-serif",
          };
        },
        align: function (context) {
          if (context.dataIndex === 0) {
            return 'left';
          }
          return 'center';
        },
        offset: function (context) {
          if (context.dataIndex === 0) {
            return 80;
          }
          return 0;
        },
        rotation: function (context) {
          if (context.dataIndex === 2) {
            return 20;
          } else if (context.dataIndex === 4) {
            return 35;
          } else if (context.dataIndex === 6) {
            return 62;
          }
          return 0;
        },
        color: 'transparent', //hide

        formatter: (value, context) => {
          if (value !== 0) {
            return context.chart.data.labels![context.dataIndex];
          } else {
            return null;
          }
        },
      },
    },

    responsive: true,
    maintainAspectRatio: true,
  };
}

function getGradientAF(ctx, chartArea) {
  if (!chartArea) {
    return;
  }
  const centerX = (chartArea.left + chartArea.right) / 2;
  const centerY = (chartArea.top + chartArea.bottom) / 2;
  const r = Math.min(
    (chartArea.right - chartArea.left) / 2,
    (chartArea.bottom - chartArea.top) / 2
  );
  let gradient = ctx.createRadialGradient(
    centerX,
    centerY,
    0,
    centerX,
    centerY,
    r
  );
  gradient.addColorStop(0.65, 'white');
  gradient.addColorStop(0.75, 'rgba(255,247,252,1)');
  gradient.addColorStop(0.95, 'rgba(255,243,251,1)');
  return gradient;
}
//
function getGradientCR(ctx, chartArea) {
  if (!chartArea) {
    return;
  }
  const centerX = (chartArea.left + chartArea.right) / 2;
  const centerY = (chartArea.top + chartArea.bottom) / 2;
  const r = Math.min(
    (chartArea.right - chartArea.left) / 2,
    (chartArea.bottom - chartArea.top) / 2
  );
  let gradient = ctx.createRadialGradient(
    centerX,
    centerY,
    0,
    centerX,
    centerY,
    r
  );
  gradient.addColorStop(0.65, 'white');
  gradient.addColorStop(0.75, 'rgba(255,239,249,1)');
  gradient.addColorStop(0.95, 'rgba(255,235,248,1)');

  return gradient;
}
//gradient CRw
function getGradientCRw(ctx, chartArea) {
  if (!chartArea) {
    return;
  }
  const centerX = (chartArea.left + chartArea.right) / 2;
  const centerY = (chartArea.top + chartArea.bottom) / 2;
  const r = Math.min(
    (chartArea.right - chartArea.left) / 2,
    (chartArea.bottom - chartArea.top) / 2
  );
  let gradient = ctx.createRadialGradient(
    centerX,
    centerY,
    0,
    centerX,
    centerY,
    r
  );
  gradient.addColorStop(0.65, 'white');
  gradient.addColorStop(0.75, 'rgba(255,236,248,1)');
  gradient.addColorStop(0.95, 'rgba(255,233,247,1)');

  return gradient;
}
//gradient HCM
function getGradientHCM(ctx, chartArea) {
  if (!chartArea) {
    return;
  }
  const centerX = (chartArea.left + chartArea.right) / 2;
  const centerY = (chartArea.top + chartArea.bottom) / 2;
  const r = Math.min(
    (chartArea.right - chartArea.left) / 2,
    (chartArea.bottom - chartArea.top) / 2
  );
  let gradient = ctx.createRadialGradient(
    centerX,
    centerY,
    0,
    centerX,
    centerY,
    r
  );
  gradient.addColorStop(0.65, 'white');
  gradient.addColorStop(0.75, 'rgba(253,234,255,1)');
  gradient.addColorStop(0.95, 'rgba(249,224,251,1)');

  return gradient;
}
//gradient HF
function getGradientHF(ctx, chartArea) {
  if (!chartArea) {
    return;
  }
  const centerX = (chartArea.left + chartArea.right) / 2;
  const centerY = (chartArea.top + chartArea.bottom) / 2;
  const r = Math.min(
    (chartArea.right - chartArea.left) / 2,
    (chartArea.bottom - chartArea.top) / 2
  );
  let gradient = ctx.createRadialGradient(
    centerX,
    centerY,
    0,
    centerX,
    centerY,
    r
  );
  gradient.addColorStop(0.65, 'white');
  gradient.addColorStop(0.75, 'rgba(253,234,255,1)');
  gradient.addColorStop(0.95, 'rgba(249,224,251,1)');

  return gradient;
}
//gradient HFO
function getGradientHFO(ctx, chartArea) {
  if (!chartArea) {
    return;
  }
  const centerX = (chartArea.left + chartArea.right) / 2;
  const centerY = (chartArea.top + chartArea.bottom) / 2;
  const r = Math.min(
    (chartArea.right - chartArea.left) / 2,
    (chartArea.bottom - chartArea.top) / 2
  );
  let gradient = ctx.createRadialGradient(
    centerX,
    centerY,
    0,
    centerX,
    centerY,
    r
  );
  gradient.addColorStop(0.65, 'white');
  gradient.addColorStop(0.75, 'rgba(253,230,255,1)');
  gradient.addColorStop(0.95, 'rgba(253,224,255,1)');

  return gradient;
}
//gradient Lipid
function getGradientLipid(ctx, chartArea) {
  if (!chartArea) {
    return;
  }
  const centerX = (chartArea.left + chartArea.right) / 2;
  const centerY = (chartArea.top + chartArea.bottom) / 2;
  const r = Math.min(
    (chartArea.right - chartArea.left) / 2,
    (chartArea.bottom - chartArea.top) / 2
  );
  let gradient = ctx.createRadialGradient(
    centerX,
    centerY,
    0,
    centerX,
    centerY,
    r
  );
  gradient.addColorStop(0.65, 'white');
  gradient.addColorStop(0.75, 'rgba(253,227,255,1)');
  gradient.addColorStop(0.95, 'rgba(252,216,255,1)');

  return gradient;
}
//gradient SC
function getGradientSC(ctx, chartArea) {
  if (!chartArea) {
    return;
  }
  const centerX = (chartArea.left + chartArea.right) / 2;
  const centerY = (chartArea.top + chartArea.bottom) / 2;
  const r = Math.min(
    (chartArea.right - chartArea.left) / 2,
    (chartArea.bottom - chartArea.top) / 2
  );
  let gradient = ctx.createRadialGradient(
    centerX,
    centerY,
    0,
    centerX,
    centerY,
    r
  );
  gradient.addColorStop(0.65, 'white');
  gradient.addColorStop(0.75, 'rgba(225,225,255,1)');
  gradient.addColorStop(0.95, 'rgba(213,213,255,1)');

  return gradient;
}
//gradient SCESS
function getGradientSCESS(ctx, chartArea) {
  if (!chartArea) {
    return;
  }
  const centerX = (chartArea.left + chartArea.right) / 2;
  const centerY = (chartArea.top + chartArea.bottom) / 2;
  const r = Math.min(
    (chartArea.right - chartArea.left) / 2,
    (chartArea.bottom - chartArea.top) / 2
  );
  let gradient = ctx.createRadialGradient(
    centerX,
    centerY,
    0,
    centerX,
    centerY,
    r
  );
  gradient.addColorStop(0.65, 'white');
  gradient.addColorStop(0.75, 'rgba(215,215,255,1)');
  gradient.addColorStop(0.95, 'rgba(206,206,255,1)');
  return gradient;
}
//gradient WC
function getGradientWC(ctx, chartArea) {
  if (!chartArea) {
    return;
  }
  const centerX = (chartArea.left + chartArea.right) / 2;
  const centerY = (chartArea.top + chartArea.bottom) / 2;
  const r = Math.min(
    (chartArea.right - chartArea.left) / 2,
    (chartArea.bottom - chartArea.top) / 2
  );
  let gradient = ctx.createRadialGradient(
    centerX,
    centerY,
    0,
    centerX,
    centerY,
    r
  );
  gradient.addColorStop(0.65, 'white');
  gradient.addColorStop(0.75, 'rgba(204,204,255,1)');
  gradient.addColorStop(0.95, 'rgba(192,192,255,1)');
  return gradient;
}
//gradient Frailty
function getGradientFrailty(ctx, chartArea) {
  if (!chartArea) {
    return;
  }
  const centerX = (chartArea.left + chartArea.right) / 2;
  const centerY = (chartArea.top + chartArea.bottom) / 2;
  const r = Math.min(
    (chartArea.right - chartArea.left) / 2,
    (chartArea.bottom - chartArea.top) / 2
  );
  let gradient = ctx.createRadialGradient(
    centerX,
    centerY,
    0,
    centerX,
    centerY,
    r
  );
  gradient.addColorStop(0.65, 'white');
  gradient.addColorStop(0.75, 'rgba(233,255,219,1)');
  gradient.addColorStop(0.85, 'rgba(220,255,197,1)');
  gradient.addColorStop(0.95, 'rgba(211,255,182,1)');
  gradient.addColorStop(1, 'rgba(206,255,173,1)');
  return gradient;
}
//gradient PD
function getGradientPD(ctx, chartArea) {
  if (!chartArea) {
    return;
  }
  const centerX = (chartArea.left + chartArea.right) / 2;
  const centerY = (chartArea.top + chartArea.bottom) / 2;
  const r = Math.min(
    (chartArea.right - chartArea.left) / 2,
    (chartArea.bottom - chartArea.top) / 2
  );
  let gradient = ctx.createRadialGradient(
    centerX,
    centerY,
    0,
    centerX,
    centerY,
    r
  );
  gradient.addColorStop(0.65, 'white');
  gradient.addColorStop(0.75, 'rgba(214,255,252,1)');
  gradient.addColorStop(0.95, 'rgba(201, 255, 251, 1)');
  return gradient;
}
//gradient Asthma/COPD
function getGradientAsthmaCOPD(ctx, chartArea) {
  if (!chartArea) {
    return;
  }
  const centerX = (chartArea.left + chartArea.right) / 2;
  const centerY = (chartArea.top + chartArea.bottom) / 2;
  const r = Math.min(
    (chartArea.right - chartArea.left) / 2,
    (chartArea.bottom - chartArea.top) / 2
  );
  let gradient = ctx.createRadialGradient(
    centerX,
    centerY,
    0,
    centerX,
    centerY,
    r
  );
  gradient.addColorStop(0.65, 'white');
  gradient.addColorStop(0.75, 'rgba(255,237,225,1)');
  gradient.addColorStop(0.95, 'rgba(255, 218, 193, 1)');
  return gradient;
}
