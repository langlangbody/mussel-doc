import { Category } from '@/storiesHierarchy.js'

import Icon from '@docs/basic/icon.md'

import Temp from './template'

export default {
  title: Category.icon
  // Our exports that end in "Data" are not stories.
}
export const Default = () => ({
  template: Temp,
  data () {
    return {
      icon1:
        'M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3-12.3 12.7-12.1 32.9 0.6 45.3l183.7 179.1-43.4 252.9c-1.2 6.9-0.1 14.1 3.2 20.3 8.2 15.6 27.6 21.7 43.2 13.4L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z',
      svg1:
        '<svg t="1579402116971" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13456"><path d="M853.29279 330.711011c-39.286376-62.517639-94.992754-112.872313-160.794394-145.955577-8.514075-4.257038-18.122817-4.986816-27.001781-1.946074-9.000594 3.040741-16.298373 9.243853-20.555411 17.757928-4.257038 8.514075-4.986816 18.122817-1.946074 27.001782 3.040741 9.000594 9.243853 16.298373 17.757929 20.55541 113.237202 56.801045 183.660767 170.646395 183.660767 297.262858 0 183.174249-149.117947 332.292196-332.292196 332.292196S179.586174 728.561587 179.586174 545.265709c0-126.738092 70.423566-240.583442 183.782397-297.384488 17.514669-8.757335 24.569189-30.042523 15.811854-47.557192-4.257038-8.514075-11.433187-14.838817-20.55541-17.757929-9.000594-3.040741-18.609336-2.310963-27.001782 1.946075-65.923269 32.961634-121.629647 83.437938-161.037653 145.955577C130.204537 394.688205 108.797719 469.00392 108.797719 545.265709c0 54.368452 10.703409 107.277349 31.745338 156.902244 20.312151 47.922081 49.381637 91.222235 86.35705 128.197649 36.975413 36.975413 80.153938 66.044898 128.197648 86.357049 49.746526 21.041929 102.533793 31.745338 156.902245 31.745338s107.277349-10.703409 156.902245-31.745338c47.922081-20.312151 91.222235-49.381637 128.197648-86.357049 36.975413-36.975413 66.044898-80.153938 86.35705-128.197649 21.041929-49.746526 31.745338-102.533793 31.745338-156.902244 0-76.140159-21.406818-150.334244-61.909491-214.554698z" fill="" p-id="13457"></path><path d="M511.87837 405.634874c19.582373 0 35.394227-15.811854 35.394228-35.394228V111.899275c0-19.582373-15.811854-35.394227-35.394228-35.394227s-35.394227 15.811854-35.394227 35.394227v258.341371c0 19.460744 15.933484 35.394227 35.394227 35.394228z" fill="" p-id="13458"></path></svg>',
      paths: [
        'M853.29279 330.711011c-39.286376-62.517639-94.992754-112.872313-160.794394-145.955577-8.514075-4.257038-18.122817-4.986816-27.001781-1.946074-9.000594 3.040741-16.298373 9.243853-20.555411 17.757928-4.257038 8.514075-4.986816 18.122817-1.946074 27.001782 3.040741 9.000594 9.243853 16.298373 17.757929 20.55541 113.237202 56.801045 183.660767 170.646395 183.660767 297.262858 0 183.174249-149.117947 332.292196-332.292196 332.292196S179.586174 728.561587 179.586174 545.265709c0-126.738092 70.423566-240.583442 183.782397-297.384488 17.514669-8.757335 24.569189-30.042523 15.811854-47.557192-4.257038-8.514075-11.433187-14.838817-20.55541-17.757929-9.000594-3.040741-18.609336-2.310963-27.001782 1.946075-65.923269 32.961634-121.629647 83.437938-161.037653 145.955577C130.204537 394.688205 108.797719 469.00392 108.797719 545.265709c0 54.368452 10.703409 107.277349 31.745338 156.902244 20.312151 47.922081 49.381637 91.222235 86.35705 128.197649 36.975413 36.975413 80.153938 66.044898 128.197648 86.357049 49.746526 21.041929 102.533793 31.745338 156.902245 31.745338s107.277349-10.703409 156.902245-31.745338c47.922081-20.312151 91.222235-49.381637 128.197648-86.357049 36.975413-36.975413 66.044898-80.153938 86.35705-128.197649 21.041929-49.746526 31.745338-102.533793 31.745338-156.902244 0-76.140159-21.406818-150.334244-61.909491-214.554698z',
        'M511.87837 405.634874c19.582373 0 35.394227-15.811854 35.394228-35.394228V111.899275c0-19.582373-15.811854-35.394227-35.394228-35.394227s-35.394227 15.811854-35.394227 35.394227v258.341371c0 19.460744 15.933484 35.394227 35.394227 35.394228z'
      ]
    }
  }
})
Default.parameters = {
  notes: { Icon },
  knobs: { disable: true },
  preview: [
    {
      tab: 'code',
      description: '',
      template: Temp,
      language: 'html',
      copy: true
    }
  ]
}
