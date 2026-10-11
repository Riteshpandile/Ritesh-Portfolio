export const ARCHITECTURE_DATA = {
  title: "Flutter Clean Architecture & State Flow",
  subtitle:
    "How I architect production Flutter applications: strictly separated layers, unidirectional data flow, reactive state management, and reliable error handling.",
  layers: [
    {
      id: "presentation",
      name: "Presentation Layer",
      badge: "UI & State Management",
      icon: "Smartphone",
      color: "#2563EB",
      description:
        "Responsible for visual components, user gestures, and reactive state representation using Riverpod or GetX.",
      elements: [
        "Flutter Widgets & Screens",
        "StateNotifier / Riverpod Providers",
        "GetX Controllers & Obx Reactive Bindings",
        "Design Tokens, Themes & Responsive Layouts"
      ],
      flowRole: "Renders UI based on state and dispatches user actions/events.",
      codeSnippet: `// Presentation: Riverpod StateNotifier Provider
final jobsProvider = StateNotifierProvider<JobsNotifier, AsyncValue<List<Job>>>((ref) {
  final getJobsUseCase = ref.watch(getJobsUseCaseProvider);
  return JobsNotifier(getJobsUseCase);
});

class JobsNotifier extends StateNotifier<AsyncValue<List<Job>>> {
  final GetJobsUseCase _getJobs;
  JobsNotifier(this._getJobs) : super(const AsyncValue.loading()) {
    fetchJobs();
  }

  Future<void> fetchJobs() async {
    state = const AsyncValue.loading();
    try {
      final jobs = await _getJobs.execute();
      state = AsyncValue.data(jobs);
    } catch (e, st) {
      state = AsyncValue.error(e, st);
    }
  }
}`
    },
    {
      id: "domain",
      name: "Domain Layer",
      badge: "Business Logic Core",
      icon: "Cpu",
      color: "#059669",
      description:
        "The pure business core, totally independent of UI frameworks, external libraries, or database drivers.",
      elements: [
        "Business Entities & Models",
        "Use Cases / Interactors",
        "Abstract Repository Contracts",
        "Custom Domain Exceptions"
      ],
      flowRole: "Encapsulates business rules and application use cases.",
      codeSnippet: `// Domain: Entity & Abstract Repository Contract
class Job {
  final String id;
  final String title;
  final String company;
  final List<String> tags;

  const Job({required this.id, required this.title, required this.company, required this.tags});
}

abstract class JobsRepository {
  Future<List<Job>> getFeaturedJobs();
  Future<void> applyForJob(String jobId, String candidateId);
}

class GetJobsUseCase {
  final JobsRepository _repository;
  GetJobsUseCase(this._repository);

  Future<List<Job>> execute() => _repository.getFeaturedJobs();
}`
    },
    {
      id: "data",
      name: "Data Layer",
      badge: "Data Sources & Repositories",
      icon: "Database",
      color: "#D97706",
      description:
        "Implements repository contracts, fetches data from REST APIs or Firebase, and manages local offline caches.",
      elements: [
        "Repository Implementations",
        "Remote Data Sources (Dio / HTTP)",
        "Firebase Firestore / Realtime DB Handlers",
        "Local Cache (Hive / SharedPreferences / SQLite)",
        "Data Transfer Objects (DTO) & JSON Serializers"
      ],
      flowRole: "Retrieves, transforms, serializes, and caches raw data.",
      codeSnippet: `// Data: Repository Implementation & Remote API Source
class JobsRepositoryImpl implements JobsRepository {
  final RemoteJobsDataSource _remoteDataSource;
  final LocalStorageService _localCache;

  JobsRepositoryImpl(this._remoteDataSource, this._localCache);

  @override
  Future<List<Job>> getFeaturedJobs() async {
    try {
      final dtos = await _remoteDataSource.fetchJobsFromApi();
      await _localCache.cacheJobs(dtos);
      return dtos.map((dto) => dto.toDomain()).toList();
    } catch (_) {
      // Fallback to offline cached data
      return _localCache.getCachedJobs();
    }
  }
}`
    },
    {
      id: "core",
      name: "Core & Platform Layer",
      badge: "Infrastructure & Native",
      icon: "Layers",
      color: "#7C3AED",
      description:
        "Platform channels, push notifications, background services, security, network interceptors, and error mapping.",
      elements: [
        "REST API Interceptors (Tokens, Logging)",
        "Firebase Cloud Messaging (FCM) Background Handler",
        "Native Platform Channels (Android / iOS)",
        "Camera & QR Code Hardware Scanner",
        "Dependency Injection Container"
      ],
      flowRole: "Bridges Flutter with device native features and external cloud services.",
      codeSnippet: `// Core: Network Interceptor & FCM Background Service
class ApiClient {
  final Dio dio;
  ApiClient(this.dio) {
    dio.interceptors.add(InterceptorsWrapper(
      onRequest: (options, handler) async {
        final token = await secureStorage.read(key: 'auth_token');
        if (token != null) options.headers['Authorization'] = 'Bearer \$token';
        return handler.next(options);
      },
      onError: (e, handler) => handler.next(handleApiError(e)),
    ));
  }
}`
    }
  ],
  flowSteps: [
    {
      step: 1,
      title: "User Interaction in UI",
      desc: "User taps a button, searches a list, or submits a form inside a Flutter widget."
    },
    {
      step: 2,
      title: "Notifier / Controller Action",
      desc: "Event triggers a method in Riverpod Notifier or GetX Controller."
    },
    {
      step: 3,
      title: "Domain Use Case Execution",
      desc: "Use case enforces business validations and queries the repository interface."
    },
    {
      step: 4,
      title: "Data Layer & Network/Firebase",
      desc: "Repository executes REST API call or Firebase stream, maps DTO to domain model, and caches response."
    },
    {
      step: 5,
      title: "Reactive UI Re-render",
      desc: "State updates immutably; Flutter widget tree rebuilds efficiently with new data or error feedback."
    }
  ]
};
