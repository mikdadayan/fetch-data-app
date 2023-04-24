import { Filter } from '../components/filterGroup/filterGroup';

export const filterColumn = (projects: any[], filter: Filter): any[] => {
  return filter.default !== true
    ? projects.filter(
        (p: any) =>
          p.dates.start.includes(filter.name) ||
          p.dates.end?.includes(filter.name)
      )
    : projects;
};
