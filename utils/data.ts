// MockData.ts

import Chance from 'chance';

export type MockData = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  // Add more fields as needed
};

const chance = new Chance();

const generateMockData = (): MockData => ({
  id: chance.guid(),
  firstName: chance.first(),
  lastName: chance.last(),
  age: chance.age(),
  // Add more fields as needed
});

export const mockData: MockData[] = Array.from({ length: 70 }, generateMockData);
