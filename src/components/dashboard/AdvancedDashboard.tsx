
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Wallet, 
  Send, 
  ArrowDown, 
  ArrowUp, 
  Activity, 
  Shield, 
  TrendingUp, 
  DollarSign,
  Smartphone,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useAuth } from '@/hooks/useAuth';
import MpesaIntegration from '../MpesaIntegration';

interface AdvancedDashboardProps {
  language: 'en' | 'sw';
  translations: any;
  setActiveTab: (tab: string) => void;
}

const AdvancedDashboard: React.FC<AdvancedDashboardProps> = ({ language, translations, setActiveTab }) => {
  const { user } = useAuth();
  const [selectedWallet, setSelectedWallet] = useState('sui');

  // Mock data - in real app, this would come from blockchain and backend
  const walletBalances = {
    sui: { balance: 1250.75, fiat: 2501.50 },
    stablecoin: { balance: 850.25, fiat: 850.25 },
    total_fiat: 3351.75
  };

  const fundUsageData = [
    { name: language === 'en' ? 'Family Support' : 'Msaada wa Familia', value: 40, color: '#8884d8' },
    { name: language === 'en' ? 'Education' : 'Elimu', value: 25, color: '#82ca9d' },
    { name: language === 'en' ? 'Medical' : 'Kimatibabu', value: 20, color: '#ffc658' },
    { name: language === 'en' ? 'Business' : 'Biashara', value: 15, color: '#ff7300' }
  ];

  const remittanceVolumeData = [
    { date: '2024-06-01', volume: 1200 },
    { date: '2024-06-05', volume: 1450 },
    { date: '2024-06-10', volume: 1380 },
    { date: '2024-06-15', volume: 1680 },
    { date: '2024-06-18', volume: 1920 }
  ];

  const recentTransactions = [
    { id: 1, type: 'send', amount: 150, status: 'completed', timestamp: '2 min ago', icon: Send },
    { id: 2, type: 'receive', amount: 300, status: 'pending', timestamp: '5 min ago', icon: ArrowDown },
    { id: 3, type: 'mpesa', amount: 500, status: 'completed', timestamp: '1 hour ago', icon: Smartphone },
    { id: 4, type: 'claim', amount: 200, status: 'completed', timestamp: '2 hours ago', icon: CheckCircle },
    { id: 5, type: 'offramp', amount: 750, status: 'processing', timestamp: '3 hours ago', icon: ArrowUp }
  ];

  const mpesaPushes = [
    { id: 1, amount: 1000, phone: '254712345678', status: 'processing', progress: 75 },
    { id: 2, amount: 500, phone: '254798765432', status: 'completed', progress: 100 }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'pending': return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'processing': return <Activity className="h-4 w-4 text-blue-500" />;
      default: return <AlertCircle className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'processing': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Bar - Wallet Balances */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Wallet className="h-5 w-5 text-primary" />
            <span className="font-medium">
              {language === 'en' ? 'Total Balance' : 'Jumla ya Salio'}
            </span>
          </div>
          <div className="text-2xl font-bold">${walletBalances.total_fiat.toLocaleString()}</div>
          <div className="text-sm text-muted-foreground">
            SUI: {walletBalances.sui.balance} • USDC: {walletBalances.stablecoin.balance}
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setActiveTab('multiCurrencyWallet')}>
            <Wallet className="h-4 w-4 mr-2" />
            {language === 'en' ? 'Manage Wallets' : 'Simamia Mikoba'}
          </Button>
          <Button onClick={() => setActiveTab('mpesaIntegration')}>
            <DollarSign className="h-4 w-4 mr-2" />
            {language === 'en' ? 'Add Funds' : 'Ongeza Fedha'}
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {language === 'en' ? 'Total Allocated vs. Spent' : 'Jumla Iliyotengwa dhidi ya Iliyotumika'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>{language === 'en' ? 'Allocated' : 'Imetengwa'}: $2,500</span>
                <span>{language === 'en' ? 'Spent' : 'Imetumika'}: $1,850</span>
              </div>
              <Progress value={74} className="h-2" />
              <div className="text-xs text-muted-foreground">74% utilized</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {language === 'en' ? 'Pending Transactions' : 'Miamala Inayosubiri'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <div className="text-xs text-muted-foreground">
              {language === 'en' ? '3 requires validation' : '3 inahitaji uhakiki'}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              {language === 'en' ? 'Compliance Score' : 'Alama za Kufuata Kanuni'}
              <Shield className="h-4 w-4" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">87%</div>
            <div className="text-xs text-muted-foreground">
              {language === 'en' ? 'Improve by verifying docs' : 'Boresha kwa kuthibitisha hati'}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Fund Usage Chart */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-lg">
              {language === 'en' ? 'Fund Usage by Category' : 'Matumizi ya Fedha kwa Jamii'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={fundUsageData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  dataKey="value"
                >
                  {fundUsageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {fundUsageData.map((entry, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }} />
                    <span className="text-sm">{entry.name}</span>
                  </div>
                  <span className="text-sm font-medium">{entry.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Remittance Volume Chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">
              {language === 'en' ? 'Remittance Volume (Last 30 Days)' : 'Kiwango cha Uhamisho (Siku 30 Zilizopita)'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={remittanceVolumeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="volume" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>{language === 'en' ? 'Quick Actions' : 'Vitendo vya Haraka'}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col gap-2" onClick={() => setActiveTab('send')}>
              <Send className="h-6 w-6" />
              <span>{language === 'en' ? 'Send Money' : 'Tuma Pesa'}</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2" onClick={() => setActiveTab('request')}>
              <ArrowDown className="h-6 w-6" />
              <span>{language === 'en' ? 'Request Money' : 'Omba Pesa'}</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2" onClick={() => setActiveTab('claim')}>
              <CheckCircle className="h-6 w-6" />
              <span>{language === 'en' ? 'Claim Funds' : 'Dai Fedha'}</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2" onClick={() => setActiveTab('mpesaIntegration')}>
              <ArrowUp className="h-6 w-6" />
              <span>{language === 'en' ? 'Off-ramp' : 'Toa Fedha'}</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Activity Feed and Off-ramp Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              {language === 'en' ? 'Recent Activity' : 'Shughuli za Hivi Karibuni'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentTransactions.map((tx) => {
                const Icon = tx.icon;
                return (
                  <div key={tx.id} className="flex items-center gap-3 p-3 rounded-lg border">
                    <Icon className="h-5 w-5 text-muted-foreground" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">${tx.amount}</span>
                        <Badge className={getStatusColor(tx.status)}>
                          {tx.status.toUpperCase()}
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">{tx.timestamp}</div>
                    </div>
                    {getStatusIcon(tx.status)}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* M-Pesa Off-ramp Status */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Smartphone className="h-5 w-5 text-green-600" />
              {language === 'en' ? 'M-Pesa Off-ramp Status' : 'Hali ya Kutoa M-Pesa'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mpesaPushes.map((push) => (
                <div key={push.id} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">KES {push.amount.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">{push.phone}</div>
                    </div>
                    <Badge className={getStatusColor(push.status)}>
                      {push.status.toUpperCase()}
                    </Badge>
                  </div>
                  <Progress value={push.progress} className="h-2" />
                  <div className="text-xs text-muted-foreground">{push.progress}% complete</div>
                </div>
              ))}
              
              <Button 
                variant="outline" 
                className="w-full mt-4"
                onClick={() => setActiveTab('mpesaIntegration')}
              >
                <Smartphone className="h-4 w-4 mr-2" />
                {language === 'en' ? 'New M-Pesa Transaction' : 'Muamala Mpya wa M-Pesa'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Advanced Features Tabs */}
      <Card>
        <CardHeader>
          <CardTitle>{language === 'en' ? 'Advanced Features' : 'Vipengele vya Kina'}</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="wallets" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="wallets">
                {language === 'en' ? 'Wallets' : 'Mikoba'}
              </TabsTrigger>
              <TabsTrigger value="zklogin">
                {language === 'en' ? 'zkLogin' : 'zkLogin'}
              </TabsTrigger>
              <TabsTrigger value="blockchain">
                {language === 'en' ? 'Blockchain' : 'Blockchain'}
              </TabsTrigger>
              <TabsTrigger value="security">
                {language === 'en' ? 'Security' : 'Usalama'}
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="wallets" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="border-2 border-primary">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">Suiet Wallet</h3>
                        <p className="text-sm text-muted-foreground">Connected</p>
                      </div>
                      <Badge variant="default">Primary</Badge>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">Ethos Wallet</h3>
                        <p className="text-sm text-muted-foreground">Available</p>
                      </div>
                      <Button size="sm" variant="outline">Connect</Button>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">WalletConnect</h3>
                        <p className="text-sm text-muted-foreground">Available</p>
                      </div>
                      <Button size="sm" variant="outline">Connect</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="zklogin" className="space-y-4">
              <div className="text-center py-8">
                <Shield className="h-16 w-16 mx-auto text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">
                  {language === 'en' ? 'Zero-Knowledge Login' : 'Kuingia kwa Zero-Knowledge'}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {language === 'en' 
                    ? 'Enhanced privacy and security with zkLogin authentication'
                    : 'Faragha na usalama ulioboreshwa na uthibitishaji wa zkLogin'
                  }
                </p>
                <Button onClick={() => setActiveTab('twoFactorAuth')}>
                  {language === 'en' ? 'Configure zkLogin' : 'Sanidi zkLogin'}
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="blockchain" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">Sui Network</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {language === 'en' 
                        ? 'Fast, secure blockchain for digital assets'
                        : 'Blockchain ya haraka na salama kwa mali za kidijitali'
                      }
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Connected</span>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">Smart Contracts</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {language === 'en' 
                        ? 'Automated escrow and validation'
                        : 'Uhifadhi na uthibitishaji wa otomatiki'
                      }
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm">Active</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="security" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">Two-Factor Authentication</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {language === 'en' ? 'Extra security layer' : 'Kiwango cha ziada cha usalama'}
                    </p>
                    <Button size="sm" onClick={() => setActiveTab('twoFactorAuth')}>
                      {language === 'en' ? 'Configure' : 'Sanidi'}
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">Security Dashboard</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {language === 'en' ? 'Monitor security events' : 'Fuatilia matukio ya usalama'}
                    </p>
                    <Button size="sm" onClick={() => setActiveTab('securityDashboard')}>
                      {language === 'en' ? 'View Dashboard' : 'Ona Dashibodi'}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdvancedDashboard;
