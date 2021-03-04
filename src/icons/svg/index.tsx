import React from 'react';

import { ReactComponent as Enabled } from './enabled.svg';
import { ReactComponent as ErrorIcon } from './error.svg';
import { ReactComponent as ForwardThick } from './ic-forward-thick.svg';
import { ReactComponent as Forward } from './ic-forward.svg';
import { ReactComponent as Connection } from './ic-menu-connections.svg';
import { ReactComponent as Destination } from './ic-menu-destinations.svg';
import { ReactComponent as Rudder } from './ic-menu-rudder.svg';
import { ReactComponent as Source } from './ic-menu-sources.svg';
import { ReactComponent as Transformation } from './ic-menu-transformations.svg';
import { ReactComponent as Signout } from './ic-signout.svg';
import { ReactComponent as Plus } from './plus.svg';
import { ReactComponent as Delete } from './delete.svg';
import { ReactComponent as Selected } from './selected.svg';
import { ReactComponent as Settings } from './settings.svg';
import { ReactComponent as Team } from './teams.svg';
import { ReactComponent as SideArrow } from './sideArrow.svg';
import { ReactComponent as EmptyDestinations } from './emptyDestinations.svg';
import { ReactComponent as NoData } from './no-data.svg';
import { ReactComponent as NoDataGraph } from './no-data-graph.svg';
import { ReactComponent as LogoRudder } from './logo-rudder.svg';
import { ReactComponent as FullLogo } from './full-logo-01.svg';
import { ReactComponent as CaretDown } from './caret-down.svg';
import { ReactComponent as Calendar } from './calendar.svg';
import { ReactComponent as ChevronDown } from './chevron-down.svg';
import { ReactComponent as Bell } from './bell.svg';
import { ReactComponent as Close } from './close.svg';
import { ReactComponent as Check } from './check.svg';
import { ReactComponent as Checkbox } from './checkbox.svg';
import { ReactComponent as Edit } from './edit.svg';
import { ReactComponent as DotsHor } from './dots-hor.svg';
import { ReactComponent as ChartBar } from './chart-bar.svg';
import { ReactComponent as DestTransformationActive } from './dest-transformation-active.svg';
import { ReactComponent as DestTransformationInactive } from './dest-transformation-inactive.svg';
import { ReactComponent as Play } from './play.svg';
import { ReactComponent as Pause } from './pause.svg';
import { ReactComponent as Clear } from './clear.svg';
import { ReactComponent as EnabledClock } from './enabledClock.svg';
import { ReactComponent as DisabledClock } from './disabledClock.svg';
import { ReactComponent as Tick } from './tick.svg';
import { ReactComponent as Warning } from './warning.svg';
import { ReactComponent as Cloud } from './cloud.svg';
import { ReactComponent as GithubLogo } from './github-logo.svg';
import { ReactComponent as GitLogo } from './git-logo.svg';
import { ReactComponent as GoogleLogo } from './google-logo.svg';
import { ReactComponent as RightArrow } from './rightArrow.svg';
import { ReactComponent as DirectorySourceCategory } from './directory_source_category.svg';
import { ReactComponent as DirectoryHeader } from './directory_header.svg';
import { ReactComponent as DirectorySidebar } from './directory_sidebar.svg';
import { ReactComponent as rudderstackLogo } from './rudderstack-logo.svg';
import { ReactComponent as arrowUnfoldMore } from './arrow_unfold_more.svg';
import { ReactComponent as Upgrade } from './upgrade.svg';
import { ReactComponent as Help } from './help_circle_outline.svg';
import { ReactComponent as Profile } from './profile.svg';
import { ReactComponent as SidebarSettings } from './settings.svg';
import { ReactComponent as ChevronRight } from './chevron_right.svg';
import { ReactComponent as UserCircle } from './user_circle.svg';

interface SvgProps extends React.SVGAttributes<any> {
  name: string;
  size?: number;
}

const Svg: React.FC<SvgProps> = ({ name, size, ...svgProps }: any) => {
  let Icon;
  switch (name) {
    case 'chart':
      Icon = ChartBar;
      break;
    case 'rudder':
      Icon = Rudder;
      break;
    case 'connection':
      Icon = Connection;
      break;
    case 'source':
      Icon = Source;
      break;
    case 'destination':
      Icon = Destination;
      break;
    case 'ed':
      Icon = EmptyDestinations;
      break;
    case 'transformation':
      Icon = Transformation;
      break;
    case 'selected':
      Icon = Selected;
      break;
    case 'signout':
      Icon = Signout;
      break;
    case 'forward':
      Icon = Forward;
      break;
    case 'forward-thick':
      Icon = ForwardThick;
      break;
    case 'settings':
      Icon = Settings;
      break;
    case 'team':
      Icon = Team;
      break;
    case 'side-arrow':
      Icon = SideArrow;
      break;
    case 'right-arrow':
      Icon = RightArrow;
      break;
    case 'plus':
      Icon = Plus;
      break;
    case 'error':
      Icon = ErrorIcon;
      break;
    case 'enabled':
      Icon = Enabled;
      break;
    case 'no-data':
      Icon = NoData;
      break;
    case 'no-data-graph':
      Icon = NoDataGraph;
      break;
    case 'logo-rudder':
      Icon = LogoRudder;
      break;
    case 'delete':
      Icon = Delete;
      break;
    case 'chevron-down':
      Icon = ChevronDown;
      break;
    case 'bell':
      Icon = Bell;
      break;
    case 'close':
      Icon = Close;
      break;
    case 'check':
      Icon = Check;
      break;
    case 'checkbox':
      Icon = Checkbox;
      break;
    case 'caret-down':
      Icon = CaretDown;
      break;
    case 'edit':
      Icon = Edit;
      break;
    case 'dots-hor':
      Icon = DotsHor;
      break;
    case 'dest-transformation-active':
      Icon = DestTransformationActive;
      break;
    case 'dest-transformation-inactive':
      Icon = DestTransformationInactive;
      break;
    case 'play':
      Icon = Play;
    case 'warning':
      Icon = Warning;
      break;
    case 'pause':
      Icon = Pause;
      break;
    case 'clear':
      Icon = Clear;
      break;
    case 'enabledclock':
      Icon = EnabledClock;
    case 'disabledclock':
      Icon = DisabledClock;
      break;
    case 'tick':
      Icon = Tick;
    case 'cloud':
      Icon = Cloud;
      break;
    case 'github':
      Icon = GithubLogo;
      break;
    case 'git-logo':
      Icon = GitLogo;
      break;
    case 'google':
      Icon = GoogleLogo;
      break;
    case 'full-logo-01':
      Icon = FullLogo;
      break;
    case 'calendar':
      Icon = Calendar;
      break;
    case "directory_source_category":
      Icon = DirectorySourceCategory
      break;
    case "directory_header":
      Icon = DirectoryHeader
      break;
    case "directory_sidebar":
      Icon = DirectorySidebar
      break;
    case 'rudderstack-logo':
      Icon = rudderstackLogo
      break;
    case 'arrow_unfold_more':
      Icon = arrowUnfoldMore;
      break;
    case 'upgrade':
      Icon = Upgrade;
      break;
    case 'help':
      Icon = Help;
      break;
    case 'profile':
      Icon = Profile;
      break;
    case 'sidebar_settings':
      Icon = SidebarSettings;
      break;
    case 'arrow_chevron_right':
      Icon = ChevronRight;
      break;
    case 'user_circle':
      Icon = UserCircle;
      break;
    default:
      break;
  }
  const sizeProps =
    (size && {
      width: size,
      height: size,
    }) ||
    {};
  return Icon ? <Icon {...sizeProps} {...svgProps} /> : <div />;
};

export default Svg;
