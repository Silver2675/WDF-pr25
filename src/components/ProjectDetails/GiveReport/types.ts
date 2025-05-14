import { UseFormHandleSubmit } from 'react-hook-form';
import { ReadOnlyElement } from '../ProjectTable/types';
import { FormSchemaReport } from './validation';

export interface ReportRequestBody {
  projectId: number;
  dateOfReport: string | null;
  projectPhase?: number | null;
  finishedActivities?: string | null;
  inProgressActivities?: string | null;
  plannedActivities?: string | null;
  planTimeStatus?: number | null;
  resourcesStatus?: number | null;
  scopeStatus?: number | null;
  costStatus?: number | null;
  riskStatus?: number | null;
  clientSatisfactionLevelStatus?: number | null;
  planTimeDetails?: string | null;
  resourcesDetails?: string | null;
  scopeDetails?: string | null;
  costDetails?: string | null;
  riskDetails?: string | null;
  clientSatisfactionLevelDetails?: string | null;
  comment?: string | null;
  risks?: string | null;
  teamSize?: number | null;
  positiveAspects?: string | null;
  currentProblems?: string | null;
  news?: string | null;
  helpNeeded?: string | null;
  openBugs?: string | null;
}

export interface GiveReportProps {
  projectId: string;
  fetchNewestReport: () => void;
  changeReadOnlyElement: (element: ReadOnlyElement) => void;
  handleSubmit: UseFormHandleSubmit<FormSchemaReport>;
  fetchInformation: () => void;
}
