/**
 * Copyright (c), BetConstruct.RMT
 * @author Ruben Aprikyan [ruben.aprikyan@betconstruct.com]
 *
 * @flow
 */

export const ACTION_STATUSES = {
  PENDING: 'pending',
  SUCCEED: 'succeed',
  FAILED: 'failed',
  NONE: null
};

const isActionStatusSucceed = (status: ?string): boolean => status === ACTION_STATUSES.SUCCEED;
const isActionStatusFailed = (status: ?string): boolean => status === ACTION_STATUSES.FAILED;
const isActionStatusPending = (status: ?string): boolean => status === ACTION_STATUSES.PENDING;
const isActionStatusNoneDefined = (status: ?string): boolean => !status;

export default {
  isActionStatusNoneDefined,
  isActionStatusSucceed,
  isActionStatusPending,
  isActionStatusFailed
};
