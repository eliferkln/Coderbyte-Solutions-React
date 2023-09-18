SELECT 
  CASE 
    WHEN condition1 THEN result1
    WHEN condition2 THEN result2
    ELSE defaultResult
  END AS outputColumn
FROM yourTable;
