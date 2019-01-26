// force loading dynamic imports for TypeScript
// needed in project root dir to avoid circular dependencies which result in classes extending "null"
import "./src/Strategies/AbstractCrawlerStrategy"; // not needed if we have an implementation of it
import "./src/Strategies/AroonTristar";
import "./src/Strategies/BladeRunner";
import "./src/Strategies/BollingerBands";
import "./src/Strategies/BollingerBouncer";
import "./src/Strategies/BollingerBreakouts";
import "./src/Strategies/BollingerDayTrader";
import "./src/Strategies/BollingerStop";
import "./src/Strategies/BreakoutDetector";
import "./src/Strategies/CandleRepeater";
import "./src/Strategies/ChannelBreakout";
import "./src/Strategies/CurrencyPairArbitrage";
import "./src/Strategies/DayTrader";
import "./src/Strategies/DayTrendFollower";
import "./src/Strategies/DEMA";
import "./src/Strategies/DEMALeverage";
import "./src/Strategies/DirectionFollower";
import "./src/Strategies/DirectionRunner";
import "./src/Strategies/DirectionRunnerLeverage";
import "./src/Strategies/EarlyStopLoss";
import "./src/Strategies/Extrapolation";
import "./src/Strategies/FishingNet";
import "./src/Strategies/FlashCrash";
import "./src/Strategies/HoneyBadger";
import "./src/Strategies/Ichimoku";
import "./src/Strategies/IndicatorDivergence";
import "./src/Strategies/InterestIndicator";
import "./src/Strategies/KAMA";
import "./src/Strategies/LiquidationCatcher";
import "./src/Strategies/MACD";
import "./src/Strategies/MACDLeverage";
import "./src/Strategies/MakerFeeOrder";
import "./src/Strategies/MarginCallBuyer";
import "./src/Strategies/MarginPositionRecovery";
import "./src/Strategies/MassOrderJumper";
import "./src/Strategies/MFI";
import "./src/Strategies/MomentumTurn";
import "./src/Strategies/MoneyFlowStrategy";
import "./src/Strategies/NOOP";
import "./src/Strategies/OneTimeOrder";
import "./src/Strategies/OrderBookPressure";
import "./src/Strategies/OrderBookPressureLeverage";
import "./src/Strategies/OrderPartitioner";
import "./src/Strategies/OutOfRangeCatcher";
import "./src/Strategies/PatternDetector";
import "./src/Strategies/PatternRepeater";
import "./src/Strategies/PercentDEMA";
import "./src/Strategies/PingPong";
import "./src/Strategies/PivotReversal";
import "./src/Strategies/PlanRunner";
import "./src/Strategies/PlanRunnerLeverage";
import "./src/Strategies/PriceDifference";
import "./src/Strategies/PriceRangeTrader";
import "./src/Strategies/PriceSpikeDetector";
import "./src/Strategies/PriceSpikeDetectorLeverage";
import "./src/Strategies/ProtectProfit";
import "./src/Strategies/ResistanceBuyer";
import "./src/Strategies/RSI";
import "./src/Strategies/RSIOrderer";
import "./src/Strategies/RSIStarter";
import "./src/Strategies/RSIStarterLeverage";
import "./src/Strategies/RSIScalpOrderer";
import "./src/Strategies/RSIScalper";
import "./src/Strategies/SARStop";
import "./src/Strategies/Scalper";
import "./src/Strategies/Sentiment";
import "./src/Strategies/SimpleAndShort";
import "./src/Strategies/SpeedCandles";
import "./src/Strategies/SpikeDetector";
import "./src/Strategies/STC";
import "./src/Strategies/StochRSI";
import "./src/Strategies/StopLossTime";
import "./src/Strategies/StopLossTurn";
import "./src/Strategies/StopLossTurnPartial";
import "./src/Strategies/SwingTrader";
import "./src/Strategies/TakeProfit";
import "./src/Strategies/TakeProfitPartial";
import "./src/Strategies/TakeProfitStochRSI";
import "./src/Strategies/TimeOrder";
import "./src/Strategies/TimeStop";
import "./src/Strategies/TradingViewSignal";
import "./src/Strategies/Trendatron";
import "./src/Strategies/TrendlineScalper";
import "./src/Strategies/TriggerOrder";
import "./src/Strategies/TurnReorder";
import "./src/Strategies/VolumeProfiler";
import "./src/Strategies/VolumeSpikeDetector";
import "./src/Strategies/VolumeSpikeDetectorLong";
import "./src/Strategies/VolumeSpikeStopper";
import "./src/Strategies/VolumeStopper";
import "./src/Strategies/WallDetector";
import "./src/Strategies/WaveOpener";
import "./src/Strategies/WaveOpenerLeverage";
import "./src/Strategies/WaveStopper";
import "./src/Strategies/WaveSurfer";
import "./src/Strategies/WaveSurferLeverage";
import "./src/Strategies/WhaleWatcher";
import "./src/Strategies/Wyckoff";

import "./src/Arbitrage/Strategies/Spread";

import "./tests/exchange";
import "./tests/import";
import "./tests/ml";
import "./tests/talib";
import "./tests/trade";


import "./config";
// compilation of these files not really needed, as they get bundled with webpack (only needed for updater)
import "./public/js/classes/BrowserEventEmitter"